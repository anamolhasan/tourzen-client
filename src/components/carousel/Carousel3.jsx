import React from 'react'

const Carousel3 = () => {
  return (
     <div
  className="hero bg-cover bg-center text-white rounded-2xl"
  style={{
    backgroundImage: "url('https://i.ibb.co/7MDX647/download.jpg')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.5)",
  }}
>
  <div className="hero-content text-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <div className="max-w-md  bg-opacity-70 k dark:bg-opacity-60 p-6 rounded-xl">
      <h1 className="text-5xl font-bold">Hydrangease</h1>
      <p className="py-6">Explore our exquisite selection of hydrangea trees and vibrant hydrangea bushes in a wide range of colors.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Carousel3