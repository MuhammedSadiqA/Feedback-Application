import React from 'react'

function Header() {
  return (
    <>
    <div className='d-flex align-items-center my-3'>
        <img className='img-fluid mx-2' width={40} src="https://d3eqn3hw2x95rk.cloudfront.net/seo/og_images/logo_qZlpEoR.png" alt="Logo" />
        <h3>LUMINAR TECHNOLAB</h3>
        <ul className='d-flex align-items-center justify-content-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Student Feedback</li>
        </ul>
    </div>
    </>
  )
}

export default Header