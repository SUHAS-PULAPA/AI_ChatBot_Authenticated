# Memory Chatbot

## Project Description
Memory Chatbot is a full-stack AI-powered conversational application that allows users to chat with an intelligent assistant in a secure and personalized way. The system combines a modern frontend, a backend API, and an AI service to provide real-time chat experiences with memory-aware responses.

## Use Case
This project is designed for users who want an interactive chatbot experience that can:
- authenticate and manage user accounts
- send and receive messages in real time
- maintain conversational context across turns
- provide intelligent responses using an LLM-powered AI service
- store chat history and user data securely

It is well-suited for applications such as virtual assistants, personalized support bots, and AI-powered help systems.

## Key Features
- User registration and login
- Protected chat routes
- Message-based conversation flow
- AI-generated replies using Groq and LangChain
- Persistent chat and user data storage through MongoDB
- REST API-based communication between services

## Project Structure
The repository is organized into three main modules:

- client: React + Vite frontend for the user interface
- server: Node.js + Express backend for authentication and chat APIs
- ai-service: Python + FastAPI service for AI response generation

### Folder Overview
- client/src: application pages, components, routing, and context
- server/controllers: request handling for authentication and chat
- server/models: MongoDB schemas for users and chats
- server/routes: API route definitions
- ai-service/chatbot.py: AI response generation logic

## Architecture
The system follows a modular three-tier architecture:

1. Frontend Layer
   - Built with React and Vite
   - Handles user interaction, authentication UI, and chat experience

2. Backend Layer
   - Built with Express.js
   - Manages authentication, API routing, and communication with the database

3. AI Layer
   - Built with FastAPI and Python
   - Receives user messages and returns AI-generated responses using an LLM

### Communication Flow
- The client sends chat requests to the server
- The server authenticates the user and forwards chat requests
- The AI service processes the message and returns a reply
- The response is sent back to the client and stored in the application flow

## Tech Stack
### Frontend
- React
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment configuration

### AI Service
- Python
- FastAPI
- LangChain
- Groq LLM
- Pydantic

## Results and Outcome
The final outcome is a functional AI chatbot application that demonstrates:
- a modern full-stack architecture
- secure user authentication
- conversational AI integration
- clean separation between frontend, backend, and AI logic

This project serves as a strong foundation for building scalable, intelligent chat applications with personalized user experiences.

## How It Works
- Users register or log in
- They enter the chat interface
- Messages are sent to the backend
- The AI service generates context-aware replies
- Responses are displayed in the UI for a smooth conversational experience
