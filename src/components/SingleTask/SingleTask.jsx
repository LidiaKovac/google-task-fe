import "./SingleTask.css"
import { BsCircle, BsCheckCircle } from "react-icons/bs"
import { useEffect, useState } from "react"
export const SingleTask = ({ content, id }) => {
  const [isChecked, setChecked] = useState(false)
  useEffect(()=> {
    if(isChecked) { //if the task has been marked as done
        //trigger state-lifting which will
            // - change the sql "isDone" column for into true
            // - fetch the updated list
            // - trigger a re-render (the "done" tasks will not show up)
    }
  }, [isChecked])
  return (
    <div className="single__wrap">
      <div className="single__checkmark" onClick={() => setChecked((check) => !check)}>
        
        {!isChecked ? <BsCircle /> : <BsCheckCircle />}
      </div>
      <div className="single__content"> {content} </div>
    </div>
  )
}
