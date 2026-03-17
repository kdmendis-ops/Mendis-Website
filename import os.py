import os
from langchain_community.document_loaders import CSVLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

# Set your API Key
os.environ["OPENAI_API_KEY"] = "your_api_key_here"

# --- STEP 1: Data Loading ---
loader = CSVLoader(file_path="NASDAQ_AAPL_2024.csv")
data = loader.load()

# --- STEP 2: Document Chunking (The Experiment) ---
def compare_chunking(docs, sizes=[500, 1000]):
    for size in sizes:
        splitter = RecursiveCharacterTextSplitter(chunk_size=size, chunk_overlap=50)
        chunks = splitter.split_documents(docs)
        print(f"Chunk Size {size}: Created {len(chunks)} chunks.")
    return RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100).split_documents(docs)

chunks = compare_chunking(data)

# --- STEP 3: Embedding & Vector Storage ---
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents=chunks, embedding=embeddings, persist_directory="./chroma_db")
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

# --- STEP 4: Retrieval Testing ---
test_queries = ["What was Apple's revenue in Q3?", "Any news on the M4 chip?", "Apple's stock performance summary"]
print("\n--- Step 4: Retrieval Test ---")
for query in test_queries:
    results = vectorstore.similarity_search(query, k=1)
    print(f"Query: {query}\nTop Result: {results[0].page_content[:150]}...\n")

# --- STEP 5: RAG Chain Construction ---
llm = ChatOpenAI(model="gpt-4o", temperature=0)
system_prompt = (
    "You are a financial assistant. Use the following context to answer the question. "
    "If you don't know the answer, say you don't know. Use three sentences maximum."
    "\n\n"
    "{context}"
)
prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])

question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)

# --- STEP 6: Execution & Evaluation Sample ---
print("--- Step 6: RAG Output ---")
response = rag_chain.invoke({"input": "Summarize Apple's financial outlook for 2024."})
print(f"Answer: {response['answer']}")