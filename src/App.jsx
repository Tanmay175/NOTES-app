import React from 'react'
import Card from './Card'
import { useState,useEffect,createContext} from 'react'

export const taskcontext=createContext();



const App = () => {

  const[title,settitle]=useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const[showform,setshowform]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()

    const newtask={
      title:title,
      details:details}
    settask((task)=>[...task,newtask])

    // setshowform(false)
    settitle('')
    setdetails('')
    
  }

  const deletetask=(indextodlt)=>{
  const newarr=task.filter((item,index)=>{
    return index!==indextodlt
  })
  settask(newarr)
}

  return (
  <taskcontext.Provider value={{task,deletetask}}>  
    <div id="container">
      
    {(showform || window.innerWidth>768) && (
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Enter Task Heading' value={title} onChange={(e)=>{settitle(e.target.value)}} ></input>
        <textarea type="text" placeholder='Enter Details' value={details} onChange={(e)=>{setdetails(e.target.value)}}></textarea>
        <button >Add Note</button>
      </form>
    )}

      <div id="notes-cont">

        <h1>NOTES</h1>
        <div className='card-cont'>
          <Card/>           
        </div> 

      </div>
        <button 
    className="fab" 
    onClick={() => setshowform(true)}
  >
    +
  </button>
    </div>
    </taskcontext.Provider>

  )
}

export default App