import React from 'react'
import { useContext } from 'react'
import { taskcontext } from './App'
import './card.css'

const Card = () => {
    // const {title}=useContext(taskcontext)
    // const {details}=useContext(taskcontext)
    const {task,deletetask}=useContext(taskcontext)
  return (
    <>     
    {task.slice().reverse().map((item,index)=>(
      item.title && item.details && (
        <div id="card" key={index}>
          <button className='delete-btn' onClick={()=>deletetask(task.length-1-index)}>X</button>

        <div className="heading">
            <h2>{item.title}</h2>
        </div>
        <div className="content">{item.details}</div>
      </div>
    ))
  )
    } 
      
     </>        
    
  )
}

export default Card