import React from 'react'

const Carousel4 = () => {
  return (
   <div
  className="hero bg-cover bg-center text-white rounded-2xl"
  style={{
    backgroundImage: "url('https://i.ibb.co/mrRKvsBN/download-1.jpg')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.5)",
  }}
>
  <div className="hero-content text-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <div className="max-w-md  bg-opacity-70 k dark:bg-opacity-60 p-6 rounded-xl">
      <h1 className="text-5xl font-bold">Houseplants</h1>
      <p className="py-6">We have the perfect houseplant for your indoor living space. Rare and unique, pet friendly to air purifying. Stop in and see for yourself.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Carousel4