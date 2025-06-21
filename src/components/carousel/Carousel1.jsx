import React from 'react'

const Carousel1 = () => {
  return (
  <div
  className="hero bg-cover bg-center text-white rounded-2xl"
  style={{
    backgroundImage: "url('https://i.ibb.co/0j6Ls1rw/platt-hill.webp')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.5)",
  }}
>
  <div className="hero-content text-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <div className="max-w-xl  bg-opacity-70  dark:bg-opacity-60 p-6 rounded-xl">
      <h1 className="text-5xl font-bold">Trees</h1>
      <p className="py-6">Trees are perfect for all outdoor spaces whether trying to add color, shade or accents. Trees are great low maintenance plants that give impact.</p>
     
    </div>
  </div>
</div>

  )
}

export default Carousel1