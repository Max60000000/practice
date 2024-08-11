import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = 'service_lq8e5lo';
        const templateId = 'template_3u3q8sh';
        const publicKey = 'bCnpq1QQa4Suy70ua';
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "abiral",
            message: message,
        }
        emailjs.send(serviceId, templateId, publicKey, templateParams)
            .then((response) => {
                console.log("Email sent bhaiya", response);
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                console.log("errror send", error)
            })
    }
    return (

        <>
            <form style={{ display: "flex",zIndex:"0.1" }} className='form1' onSubmit={handleSubmit}>
                <div style={{ padding: "60px", textAlign: "center", flexDirection: "column", justifyContent: "center", width: "50%",  }}>
                    <p style={{ fontSize: "40px" }}>Get in Touch</p>
                    <input type='text' style={{ marginRight: "12px" }} alt='' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    
                    <input type='email' style={{ padding:"20px",marginRight: "12px" ,marginBottom:"30px"}} value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} alt='' />
                   
                    <textarea type='text' style={{ marginTop: "12px" }} value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} alt='' />
                    
                    <button type='submit' >Submit</button>
                </div>

                <div style={{ width: "50%", padding: "60px" }}>
                    <img src="
       https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s"
                        style={{ width: "1200", height: "500", }} alt="" />
                </div>
            </form>
        </>
    )
}

export default Contact
