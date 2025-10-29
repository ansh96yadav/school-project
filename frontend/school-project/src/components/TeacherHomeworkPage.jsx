import React from 'react'
import { useState } from 'react'

function TeacherHomeworkPage() {
  const[tasks, setTasks] = useState([])
  const[form, setForm] = useState({title:"",description:'',subject:'',dueDate:''})
  const[x, setX] = useState(1000)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.title || !form.subject || !form.dueDate) return alert("Enter Title, Due Date, Subject!");
    const currentDate = Date()
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth(); 
    // const day = currentDate.getDate();
    // const dayOfWeek = currentDate.getDay();
    // const date = `${day}/${month}/${year} ${dayOfWeek}`
    const newTask = {...form, id: x, date: currentDate, status:"Pending"}
    setTasks([...tasks, newTask])
    setForm({ title: "", description: "", dueDate: "" })
    setX(x+1)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  

  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-[#2b2bfe] text-white p-4 flex justify-between items-center shadow-md'>
        <h1 className='text-[1.2rem] font-extrabold'>📘Teacher Dashboard</h1>
        <ul className='list-none flex gap-10'><li className='px-2 py-1  cursor-pointer hover:bg-[#5151ff]'>Home</li>
        <li className='px-2 py-1 hover:bg-[#5151ff] cursor-pointer'>Students</li>
        <li className='px-2 py-1 hover:bg-[#5151ff] cursor-pointer'>Analytical</li></ul>
      </nav>
      <div className='max-w-5xl mx-auto p-6'>
        <div className='p-6 bg-white rounded-2xl mb-8 shadow-md'>
          <h2 className='text-lg pb-4 font-semibold'>Add New Homework</h2>
          <form onSubmit={handleSubmit} className='grid gap-10 md:grid-cols-2'>
            <div><label htmlFor='title' className='text-[0.9rem]'>Title:</label>
            <input 
            type='text'
            id='title'
            value={form.title}
            onChange={handleChange}
            name='title'
            placeholder='Title'
            className='border p-2 rounded-md w-full'
            /></div>
            <div>
              <label htmlFor='duedate' className='text-[0.9rem]'>Due Date:</label>
              <input 
              type='date'
              value={form.dueDate}
              onChange={handleChange}
              name='dueDate'
              id='duedate'
              className='border p-2 rounded-md w-full'
              />
            </div>
            <div>
              <label htmlFor='subject' className='text-[0.9rem]'>Subject:</label>
              <input 
              type='text'
              value={form.subject}
              onChange={handleChange}
              placeholder='Subject'
              id='subject'
              name='subject'
              className='border p-2 rounded-md w-full'
              />
            </div>
            <div className='row-span-3 md:col-span-3'>
              <label htmlFor='description' className='text-[0.9rem]'>Description:</label>
              <textarea 
              name='description'
              id='description'
              value={form.description}
              onChange={handleChange}
              placeholder='Description (optional)'
              className="border p-2 rounded-md h-30 max-h-40 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md md:col-span-3"
            >
              Post Homework
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Posted Homework</h2>
          { tasks.length === 0 ? (
            <p className="text-gray-500">No homework added yet.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className='border-b'>
                  <th className="p-2">Title</th>
                   <th className="p-2">Due Date</th>
                   <th className="p-2">Status</th>
                   <th className="p-2">Actions</th>
                   <th className='p-2'>Subject</th>
                   <th className='p-2'>Uploaded Date</th>
                   <th className='p-2'>Description</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b hover:bg-gray-50">
                    <td className='p-2'>{task.title}</td>
                    <td className='p-2'>{task.dueDate}</td>
                    <td className={`p-2 font-medium ${task.status === 'Completed' ? 'text-[#64fb7d]' : 'text-[#ff157a]'}`}>{task.status}</td>
                    <td className="p-2 flex gap-3"><button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        🗑 Delete
                      </button></td>
                      <td className='p-2'>{task.subject}</td>
                      <td className='p-2'>{task.date}</td>
                      <td className='p-2'>{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
          }
      </div>
      <div className="bg-yellow-50 p-4 rounded-xl mt-8 text-gray-700">
           <strong>🔔 Coming Soon:</strong> Reminder alerts & progress tracking!
         </div>
    </div>
  )
}

export default TeacherHomeworkPage



// import React, { useState } from "react";

// export default function TeacherHomeworkPage() {
//   const [tasks, setTasks] = useState([]);
//   const [form, setForm] = useState({ title: "", description: "", dueDate: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.title || !form.dueDate) return alert("Enter title and due date!");
//     const newTask = { ...form, id: Date.now(), status: "Pending" };
//     setTasks([...tasks, newTask]);
//     setForm({ title: "", description: "", dueDate: "" });
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const markCompleted = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, status: "Completed" } : task
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
//         <h1 className="text-xl font-bold">📘 Teacher Dashboard</h1>
//         <ul className="flex gap-6">
//           <li className="hover:text-gray-200 cursor-pointer">Home</li>
//           <li className="hover:text-gray-200 cursor-pointer">Students</li>
//           <li className="hover:text-gray-200 cursor-pointer">Logout</li>
//         </ul>
//       </nav>

//       {/* Main Section */}
//       <div className="max-w-5xl mx-auto p-6">
//         {/* Add Homework Form */}
//         <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
//           <h2 className="text-lg font-semibold mb-4">Add New Homework</h2>
//           <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
//             <input
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               placeholder="Title"
//               className="border p-2 rounded-md w-full"
//             />
//             <input
//               type="date"
//               name="dueDate"
//               value={form.dueDate}
//               onChange={handleChange}
//               className="border p-2 rounded-md w-full"
//             />
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Description (optional)"
//               className="border p-2 rounded-md md:col-span-3 w-full"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md md:col-span-3"
//             >
//               Post Homework
//             </button>
//           </form>
//         </div>

//         {/* Homework List */}
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-lg font-semibold mb-4">Posted Homework</h2>
//           {tasks.length === 0 ? (
//             <p className="text-gray-500">No homework added yet.</p>
//           ) : (
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="border-b">
//                   <th className="p-2">Title</th>
//                   <th className="p-2">Due Date</th>
//                   <th className="p-2">Status</th>
//                   <th className="p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task) => (
//                   <tr key={task.id} className="border-b hover:bg-gray-50">
//                     <td className="p-2">{task.title}</td>
//                     <td className="p-2">{task.dueDate}</td>
//                     <td
//                       className={`p-2 font-medium ${
//                         task.status === "Completed"
//                           ? "text-green-600"
//                           : "text-yellow-600"
//                       }`}
//                     >
//                       {task.status}
//                     </td>
//                     <td className="p-2 flex gap-3">
//                       {task.status === "Pending" && (
//                         <button
//                           onClick={() => markCompleted(task.id)}
//                           className="text-green-600 hover:text-green-800"
//                         >
//                           ✔️ Mark Done
//                         </button>
//                       )}
//                       <button
//                         onClick={() => deleteTask(task.id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         🗑 Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Extension Placeholder */}
//         <div className="bg-yellow-50 p-4 rounded-xl mt-8 text-gray-700">
//           <strong>🔔 Coming Soon:</strong> Reminder alerts & progress tracking!
//         </div>
//       </div>
//     </div>
//   );
// }
