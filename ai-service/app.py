from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import generate_reply

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    history: list

@app.get("/")
def root():
    return {"message": "AI Service Running"}

@app.post("/chat")
def chat(req: ChatRequest):
    reply = generate_reply(req.message, req.history)
    return {"reply": reply}