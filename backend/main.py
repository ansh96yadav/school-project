# Backend starting point 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173",'https://apsjh.netlify.app'],
    allow_credentials = True,
    allow_headers = ["*"],
    allow_methods = ["*"] 
)

questionAndAnswer = {
    "What is school timing?":'''Summer Timings - 7:30 am to 1:40 pm \n
Winter Timings – 8:00 am to 2:10 pm  \n

Second and Fourth Saturday of every month will be a holiday.
Last working day of every month will be a half day.
Classes I-V will observe holiday on all Saturdays.
First Saturday of every month will be a holiday.''',
    "How to contact school?":"Pta nhi",
    "How many teachers are there?":"Arre sare teachers se padna he kya.",
    "Tell me some rules of school.":"Me nhi bataunga meri marzi.",
}

@app.post('/chatbot')
def handle_chatbot(data: dict):
    userResponse = data.get("selectedOption")

    if not userResponse:
        return {"answer": "Please select a valid question."}
    
    for question in questionAndAnswer.keys():
        if question in userResponse:
             return {"answer":questionAndAnswer[question]}
    
    return {"answer": "Sorry, I don’t understand that question."}
            
