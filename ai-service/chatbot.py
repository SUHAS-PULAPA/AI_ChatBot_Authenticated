from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from dotenv import load_dotenv
import os

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name="llama-3.1-8b-instant"
)

def generate_reply(message, history):
    messages = [
        SystemMessage(
            content="You are a helpful memory-enabled assistant. Remember user preferences from previous messages."
        )
    ]

    for item in history:
        role = item.get("role")
        text = item.get("message")

        if role == "user":
            messages.append(HumanMessage(content=text))
        else:
            messages.append(AIMessage(content=text))

    messages.append(HumanMessage(content=message))

    response = llm.invoke(messages)

    return response.content