import React from 'react'
import contact from "../photo/contact.png"
const Contact = () => {
  return (
    <div className='contact-container'>
    <h1 className="contact-title">Let&apos;s Keep in Touch</h1>
    <div className="contact-content">
      {/* <div className="contact-imgContainer"> */}
      <img src={contact} alt="" className="img" />
      {/* </div> */}
      <form className="contact-form">
        <input type="text" placeholder='name' className="contact-input"/>
        <input type="text" placeholder='email' className="contact-input" />
        <textarea className="contact-textArea" placeholder="message" name="" id="" cols="30" rows="10"></textarea>
        <a href="$" className="button">Send</a>
      </form>
    </div>
  </div>
  )
}

export default Contact