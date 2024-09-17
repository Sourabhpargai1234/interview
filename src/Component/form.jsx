import React,{useState} from 'react'
import '../App.css';

export default function form() {
    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name.length<5){
            alert('Atleast 6 characters required');
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }

        alert('Form submitted successfully');
    }
  return (
    <div>
      <form action="" className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="password">Enter your password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="email">Enter your email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}
