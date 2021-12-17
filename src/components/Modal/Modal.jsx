import { useState } from "react";
import { useEffect } from "react";
import { getPlanners } from "../../api/planner";
import { addTask } from "../../api/task";
import "./Modal.css";

export const Modal = ({ isOpen, close }) => {
  const [planners, setPlanners] = useState([])
  const [select, setSelect] = useState([])
  const [task, newTask] = useState("")
  useEffect(()=> {
    getPlanners().then(res => setPlanners(res))
  }, [])
  const handleAdd = (event) => {
    console.log(event.key)
    if(event.key === 'Enter') {
      addTask(task, select)
      close()
    } else {
      newTask(event.target.value)
    }
  }
  return <>
    {isOpen && <><div className="modal__bg" onClick={()=> close()} ></div>
    <div className="modal__inner">
      <div className="modal__controls" onClick={()=> close()}>x</div>
      <h2>Create new task</h2>
      <small>Press enter to create</small>
      <input type="text" onKeyUp={(e)=> handleAdd(e)} />
      <h3>Choose a planner</h3>
      <div className="modal__planners">

      {planners.map(planner => {
        return <div className={ planner.id === select ? "option__modal--click" : "option__modal"} onClick={()=> setSelect(planner.id)}>
          {planner.name}
        </div>
      })}
      </div>
    </div> </>
    }
  </>;
};
