import React from 'react'

const Carousel2 = () => {
  return (
    <div
  className="hero bg-cover bg-center text-white rounded-2xl"
  style={{
    backgroundImage: "url('https://i.ibb.co/B2fs6DL7/hero-bannertree.jpg')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.5)",
  }}
>
  <div className="hero-content text-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <div className="max-w-lg  bg-opacity-70 k dark:bg-opacity-60 p-6 rounded-xl">
      <h1 className="text-5xl font-bold">Evergreens</h1>
      <p className="py-6">Evergreen plants stay green year round. They are perfect to provide contrast to any outdoor space, even during dreary winter months
</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Carousel2