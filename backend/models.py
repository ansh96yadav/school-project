from sqlalchemy import Column, Integer, String, Date
from database import Base

class Homework(Base):
    __tablename__ = "homework"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String)
    dueDate = Column(Date)
    status = Column(String, default="pending")
    date = Column(String)
    subject = Column(String)
    