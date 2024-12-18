import React from 'react';
const Contact = () => {
  return (
    <>
          <h1>Contact Us</h1>
          
          <div className="contact-content">
          <form action="/">
              <label htmlFor="alphabet">Name</label>
              <input type="text" placeholder='Enter your name' required />
              <label htmlFor="number">Mobile Number</label>
              <input type="num" placeholder='Enter your mobile no.' maxLength="10" minLength="10" required />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder='Enter your E-mail' required />
              <label htmlFor="message">Message/Suggestion</label>
              <input type="textarea" placeholder='Enter  messages/ suggestion' />

              <button className='button-s' >Submit</button>
              </form>
          </div>
             
    </>
  )
}

export default Contact
