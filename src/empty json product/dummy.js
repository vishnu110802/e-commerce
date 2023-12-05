import React from 'react'
import './dummy.css';
export default function Dummy() {
  return (
    <div className="split-landing-page">
      <div className="left-side">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Learn More</button>
      </div>
      <div className="right-side">
        {/* You can add an image or any other content here */}
      </div>
    </div>
  )
}
