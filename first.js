import React,{useState} from "react";

function Nav(){
  const int=0;
const [value,setVal]=useState(int)
const ret=()=>{
  setVal(value+1);
};
const mine=()=>{
  if(value>0)
  {
    setVal(value-1)
  }
}

return(
<>
<h1>{value}</h1>
<button onClick={ret}>increase</button>
<button onClick={mine}>decrease</button>

</>
);
}
export default Nav;
