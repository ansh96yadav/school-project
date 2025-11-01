import React, { useState } from 'react'
import { useEffect } from 'react'

function StudentHomeworkPage() {

  const[title,setTitle] = useState('')
  const[dueDate,setDueDate] = useState('')
  const[description,setDescription] = useState('')
  const[subject,setSubject] = useState('')
  

  const fetchingData = async() => {
    const response = await fetch("http://127.0.0.1:8000/homework",{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
  })

  const data = await response.json();
         setTitle(data.hi)

  }

  useEffect(async()=> {
     fetchingData()
     
  })

  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

export default StudentHomeworkPage
