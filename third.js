import React,{useState} from "react";
import  "./Navbar.css"

function Nav()
{
    const [name,setName]=useState(" ");
    const handlechange1=(e)=>{
        setName(e.target.value);
    }
    const [mobile,setMobile]=useState(" ");
    const handlechange2=(a)=>{
        setMobile(a.target.value);
    }
    const [birth,setBirth]=useState(" ");
    const handlechange3=(b)=>{
        setBirth(b.target.value);

    }
    const [email,setEmail]=useState(" ");
    const handlechange4=(c)=>{
        setEmail(c.target.value);

    }
    const [update1,setUp1]=useState(name);
    const [update2,setUp2]=useState(mobile);
    const [update3,setUp3]=useState(birth);
    const [update4,setup4]=useState(email);
    const handleupdate=()=>
    {
        setUp1(name);
        setUp2(mobile);
        setUp3(birth);
        setup4(email)
    }
return(
<>
<h1>students database</h1>
<label>enter your name</label>
<br>
</br>
<br>
</br>
<input className="name" type="text" onChange={handlechange1} placeholder="enter your name"></input>


<br>
</br>
<br>
</br>
<br></br>
<label className="vishal">enter your mobile number</label>
<br>
</br>
<br></br>
<input className="name1" type="number" onChange={handlechange2}  placeholder="enter your name"></input>
<br></br>
<br></br>
<br></br>
<label className="vishal2">enter your birth date</label>

<br>
</br>
<br></br>
<input className="name2" type="date" onChange={handlechange3}  placeholder="enter your name"></input>

<br>
</br>
<br></br>
<br></br>
<label className="vishal3">enter your email address</label>
<br>
</br>
<br>
</br>
<input className="name3" type="text" onChange={handlechange4} placeholder="enter your name"></input>
<br>
</br>
<br></br>
<br></br>
<br></br>
<button onClick={handleupdate}>submit</button>
<div className="chh">
<h2>your name:</h2>
<h3>{update1}</h3>
<br></br>
<br></br>
<h2>your mobile number</h2>
<h3>{update2}</h3>
<br></br>
<br></br>
<h2>your birth date</h2>
<h3>{update3}</h3>
<br></br>
<br></br>
<h2>your email address</h2>
<h3>{update4}</h3>
</div>
</>
);

}

export default Nav;
