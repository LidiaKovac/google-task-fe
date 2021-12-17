import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getPlanners } from "../../api/planner";
import { Option } from "../Option/Option";
import "./Dropdown.css";
export const Dropdown = ({fetchSelPlanner}) => {
  const [open, setOpen] = useState(false);
  const [selected,setSelected] = useState({})
  const [planners, setPlanners] = useState([])
  useEffect(()=> {
    getPlanners().then(res => setPlanners(res))
  }, [])
  useEffect(()=> {
    fetchSelPlanner(selected?.tasks, selected?.id || "")
  }, [selected])
  return (
    <>
      <div className="dropdown__wrap" onClick={(e) => {setOpen((op) => !op)}}>
          {!selected?.name ? "Select a planner" : selected?.name}
      {open && 
        <div className="dropdown__content">
          <div onClick={()=> setSelected(undefined)}>
                      <Option plannerName={"See All"} />
                  </div>
          {planners?.map(planner => {
           return <div key={planner.id} onClick={()=> setSelected(planner)}>
                      <Option plannerName={planner.name} />
                  </div>
          })}
        </div>
        }
      </div>
      
    </>
  );
};
