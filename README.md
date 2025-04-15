# InterOpera Coding Challenge

This is an interview test project for **InterOpera**.

It is a full-stack web application built using:
- **Python (FastAPI)** as the backend
- **Next.js** as the frontend
- **OpenAI GPT** for the AI chat assistant

The app displays a list of Sales Representatives and allows users to interact with an AI assistant.

---

## Features

- Paginated list of sales reps with their regions, roles, and details
- Modal view showing individual deals and client info
- Bar chart showing total deal value per sales rep
- AI assistant powered by OpenAI to answer any user prompt

---

## Tech Stack

- Backend: FastAPI
- Frontend: Next.js (React + Tailwind + shadcn/ui)
- AI: OpenAI gpt-4.1

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/riskibarqy/coding-test-interopera.git
cd coding-test-interopera
```

### 2. Install backend dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate 
pip install -r requirements.txt
```

### 3. Create .env file

In the backend root (/backend), create a .env file:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```
You can generate your OpenAI API key at:
https://platform.openai.com/account/api-keys


### 4. Run the backend server

In the backend root (/backend), create a .env file:

```bash
uvicorn app.main:app --reload
```

The backend API will Running at:
http://localhost:8000


### 5. Setup frontend (Next.js)

In the backend root (/backend), create a .env file:

```bash
cd frontend
npm install
npm run dev
```

The Frontend will running at:
http://localhost:3000

### API Endpoints
- GET /api/sales-reps — List of sales reps with pagination
- POST /api/ai — Chat with AI assistant ({ prompt: "your question" })

### What Would I do to improve it ?
## Serverside
- Using docker to manage both of the apps
- Using CI/CD
## Backend
- Using cache if the data is persist
- Rate Limit the API since the AI API Assistent is has the limit 
- Improve clean architecture to easy managing the backend and front end
- Using constants wisely to make sure there is no hardcoded code
## Frontend
- Add chat history with the ai assistants
- Add more detailed charts to make users experience better
- Add responsiveness to every devices
- Add skeleton loaders
