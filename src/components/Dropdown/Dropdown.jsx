import { useState } from "react";
import { Option } from "../Option/Option";
import "./Dropdown.css";
export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected,setSelected] = useState("")
  return (
    <>
      <div className="dropdown__wrap" onClick={(e) => {setOpen((op) => !op)}}>
          {!selected ? "Select a planner" : selected}
      {open && 
        <div className="dropdown__content">
            {/* map planners here using <Option /> component */}
            <div onClick={(e)=> setSelected("University")}>
            <Option plannerName={"University"} />
            </div>
            <div onClick={(e)=> setSelected("Work")}>
            <Option plannerName={"Work"}  /> 
            </div>
        </div>
        }
      </div>
      
    </>
  );
};
