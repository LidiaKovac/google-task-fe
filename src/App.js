import { useEffect, useState } from "react";
import { checkTask, getTasks } from "./api/task";
import "./App.css";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { SingleTask } from "./components/SingleTask/SingleTask";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    //in the beginning, we want to see ALL tasks
    if (!tasks) {
      getTasks().then((res) => setTasks(res));
    }
  }, [tasks]);
  const setDone = (id) => {
    checkTask(id).then((res) => setTasks(res));
  };
  //trigger state-lifting which will
  // - change the sql "isDone" column for into true
  // - fetch the updated list
  // - trigger a re-render (the "done" tasks will not show up)
  return (
    <>
      <div className="app__wrap">
        <img src="/assets/logo.png" alt="logo" />
        <div className="app__header">
          <Dropdown fetchSelPlanner={(tasks) => setTasks(tasks)} />
          <div className="app__plus" onClick={()=> setOpen(true)}>
            <HiOutlinePlusSm />
          </div>
        </div>
        {tasks?.map((task) => {
          return <SingleTask key={task.id} content={task.content} id={task.id} setDone={setDone} />;
        })}
      </div>
      <Modal />
    </>
  );
}

export default App;
