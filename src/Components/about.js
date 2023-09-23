import React from 'react'
import './Styles/about.css'

const about = () => {
  return (
    <>
<div className="card text-bg-light">
  <img src="about.jpg" className="card-img" alt="img-about" />
  <div className="card-img-overlay">
  </div>
</div>

<div className='about-us container'>
<div className='row'>
  <div className='col-md-6'>
  <h3 className='welcome-text text-center'>Welcome To The World</h3>
    <img src='about2.png' className='img' alt='about_img'/>
  </div>
  <div className='col-md-6'>
    <h2 className='wel-text text-center'>Our Mission</h2>
    <p className='para text-center'>"we are on a mission to bridge the gap between job seekers and employers, empowering individuals to realize their career aspirations and helping organizations find the perfect talent. We are committed to providing job seekers with the resources they need, including job listings, career guidance, and interview preparation, all while assisting employers in their quest for top talent through advanced recruitment solutions. Our dedication to fostering diversity and inclusion in the workplace drives us forward, and our commitment to continuous innovation ensures that we stay at the forefront of the evolving job market. As your career partner, we aspire to be the catalyst that propels you toward success, shaping a brighter future for both individuals and organizations. Join us today in our mission to connect dreams to careers."
</p>
<br/>
<p>-Atul Maurya</p>
  </div>
  <hr/>
</div>
</div>
<div className='founding container'>
  <div className='row'>
    <div className='col-md-6'>
      <h2 className='story text-center'>Founding Story</h2>
      <p className='story-para text-center'>"It was born when a dedicated group of visionaries, driven by a shared passion for transforming the job-seeking and hiring landscape, embarked on a journey to create a groundbreaking platform. With diverse backgrounds in technology, HR, and entrepreneurship, our founders united around a common mission: to revolutionize the job search experience, ensuring that every individual, regardless of their background, could pursue their career aspirations. Through unwavering dedication, relentless research, and collaboration, they transformed a bold idea into [Job Portal Name]. Despite countless challenges, their commitment to innovation led to a platform that simplifies job searching, recruitment, and champions diversity and inclusion in the workforce. Today, [Job Portal Name] stands as a testament to their vision, exemplifying our enduring mission to connect dreams to careers."




</p>
    </div>
    <div className='col-md-6'>
      <img src='about3.png'className='founding-img' alt='founding-pic'/>
    </div>
  </div>
</div>

    </>
  )
}

export default about