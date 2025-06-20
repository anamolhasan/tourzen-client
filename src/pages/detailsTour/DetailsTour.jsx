import React from 'react'
import { useParams } from 'react-router'

const DetailsTour = () => {
    const {id} = useParams()
  return (
    <div>
        <p>Tour Id : {id}</p>

        </div>
  )
}

export default DetailsTour