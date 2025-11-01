from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db
import models, schemas # keep only this, no direct `from models import Homework`
from datetime import datetime  

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)


# ---------------- Chatbot Endpoint ----------------
questionAndAnswer = {
    "What is school timing?": """Summer: 7:30 am to 1:40 pm
Winter: 8:00 am to 2:10 pm
2nd & 4th Saturday holiday. Last day = half day.""",
    "How to contact school?": "Not defined yet.",
    "How many teachers are there?": "Plenty, don’t worry.",
    "Tell me some rules of school.": "Be on time, wear uniform, behave.",
}

@app.post("/chatbot")
def handle_chatbot(data: dict):
    userResponse = data.get("selectedOption")
    if not userResponse:
        return {"answer": "Please select a valid question."}
    for question in questionAndAnswer.keys():
        if question in userResponse:
            return {"answer": questionAndAnswer[question]}
    return {"answer": "Sorry, I don’t understand that question."}


# ---------------- Homework Endpoints ----------------
@app.post("/homework")
def create_homework(homework: schemas.HomeworkCreate, db: Session = Depends(get_db)):
    due_date_obj = datetime.strptime(homework.dueDate, "%Y-%m-%d").date()
    new_homework = models.Homework(
        title=homework.title,
        description=homework.description,
        subject=homework.subject,
        dueDate=due_date_obj,
        date=homework.date,
        status=homework.status
    )
    db.add(new_homework)
    db.commit()
    db.refresh(new_homework)
    return new_homework

@app.get("/homework")
def get_homework(db: Session = Depends(get_db)):
    return db.query(models.Homework).all()


@app.delete("/homework/{task_id}")
def delete_homework(task_id: int, db: Session = Depends(get_db)):
    task = db.query(models.Homework).filter(models.Homework.id == task_id).first()
    if not task:
        return {"error": "Task not found."}
    db.delete(task)
    db.commit()
    return {"message": "Deleted successfully"}
