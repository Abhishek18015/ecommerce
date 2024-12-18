import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="subscribe"> <img className='f-logo' src="../Images/logo1.png" alt="" />
          <p className='f-logo'> Shop Me is a website for  clothes of men , women, kids to the needs of the entire family. We aspire to provide our customers a memorable shopping experience. </p></div>
        <div className="subscribe">
          <h1> Customer Services</h1>
          <label htmlFor="email"></label>
        <p className='footer-para'>Services</p>
          <p className='footer-para'>Privacy And Policy </p>
          <p className='footer-para'>Return Policy</p>
          <p className='footer-para'>User Agreement </p>
          <p className='footer-para'>Disclaimer</p>
        </div>
        <div className="subscribe">
          <h1>Contact Us</h1>
          <p className='footer-para'>🏠 krishana Nagar near petrol pump , lakhnoor Pind , Bihar India 1450003 </p>
          <p className='footer-para'>📞 987456321</p>
          <p className='footer-para'>📩 info@shopme123.in </p>
          <p className='footer-para'>⏲ Opens Mon to Fri 9:00am to 7:00pm </p>
        </div>
        <div className="subscribe">
          <h1>Social Media</h1>
          <div className="socialm">
            <img className='social' src="../Images/icon1.png" alt="instagram" />
            <img className='social' src="../Images/icon2.png" alt="facebook" />
            <img className='social' src="../Images/icon3.png" alt="twitter" />
            <img className='social' src="../Images/icon4.png" alt="whatsaap" />
          </div>
        </div>

        <div className="footerr"> <h3> Copyrights &copy; E-commerce website@20001</h3></div>
      </div>
    </>
  )
}

export default Footer
