import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-6 py-12 text-center">
      {/* Animated GIF */}
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="Lost in the Himalayas"
        className="w-80 h-auto mb-6"
      />

      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
        Oops! You seem lost in the Himalayas 🏔️
      </h1>
      <p className="text-lg  mb-8 max-w-md">
        The page you’re looking for isn’t here. It might have melted in the snow or never existed at all.
      </p>

      {/* Back to Home Button */}
      <Link to="/" className="btn btn-primary text-white text-lg px-6 py-3 rounded">
        ⛺ Back to Home
      </Link>
    </div>
  )
}

export default NotFound