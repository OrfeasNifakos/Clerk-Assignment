import React, {useState} from 'react'

function Card()  {
  
   const [name,setName] = useState('Your Name');
   const [email,setEmail] = useState('Job Title')
   const [phone,setPhone] = useState(""); 
   const [location,setLocation] = useState(""); 
    
  return (
    <div className='Card'>
      <div className='upper-container'>
         <div className='image-container'>
           <img src="" alt="" height="100px" width="100px" />
         </div>
      </div>
      <div className='lower-container'>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <p> {phone}</p>
        <p> {location}</p>
      </div>
    </div>
  )
}

export default Card