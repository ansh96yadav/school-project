from pydantic import BaseModel

class HomeworkBase(BaseModel):
    title: str
    description: str
    subject: str
    dueDate: str
    date: str
    status: str

class HomeworkCreate(HomeworkBase):
    pass

class HomeworkResponse(HomeworkBase):
    id: int

    class Config:
        orm_mode = True
