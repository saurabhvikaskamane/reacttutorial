import React,{useState} from "react";

function Nav()
{
const [message,setMassege]=useState(" ");
const [update,setUpdate]=useState(" ");

const handleChange=(event)=>{
  setMassege(event.target.value);
}
const handleClick=()=>{
  setUpdate(message);

}
return(
<>
<input type="text" onChange={handleChange}  placehodler="enter your massege"></input>
<br>
</br>
<h2>massege:{update}</h2>
<button onClick={handleClick}> update</button>
</>
);

}

export default Nav;
