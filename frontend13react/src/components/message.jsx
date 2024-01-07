import { useState } from "react"

function Message() {

  let [messages,setMessages] = useState([
      {   
         id:  1,
         content: 'Hello',
         author: 'admin',
          side: 'left',
      },

      {
        id:  2,
        content: 'Hi',
        author: 'Ali',
         side: 'right',
     },

     {
        id:  3,
        content: 'how are you',
        author: 'Ali',
         side: 'left',
    },
    {
      id:  4,
      content: 'i am fine',
      author: 'Ali',
       side: 'right',
  },
  
  {
    id:  5,
    content: 'how are you',
    author: 'Ali',
     side: 'left',
  },
  {
    id:  6,
    content: 'i am fine',
    author: 'Ali',
     side: 'right',
  },

  {
    id:  7,
    content: 'i am fine',
    author: 'Ali',
     side: 'right',
  },
 ])

function deleteMessage(id) {
   const arr = messages.filter(item =>{
          if(item.id === id){
            return false
          }
            return true
          

      })
     setMessages(arr) 
}


  let arr=messages.map(message=>{
       return(
        <div className="row">
            <div className="col-3">
                  <div className="left"> 
                       <p>{message.content}</p>
                      <span>{message.author}</span>
                  </div>
            </div>
      </div>
       )
  })

    return (
        <div className="message">
          <div className="container">
          {messages.map(message=>{
       return(
               <div className= {`row ${message.side === `left` ? `left`: ``}`}>
                   <div className="col-3">
                         <div className={message.side}>
                         <button onClick={() => deleteMessage(message.id)} className="btn-delete">X</button> 
                              <p>{message.content}</p>
                             <span>{message.author}</span>
                             
                         </div>
                   </div>
             </div>
       )
  })}
          </div>
        </div>
        
    );
  }
  
  export default Message;
  