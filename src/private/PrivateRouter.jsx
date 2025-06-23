import React, { Children, useContext } from 'react'
import { AuthContext } from '../provider/AuthContext'
import Loading from '../components/shared/Loading'
import { Navigate, useLocation } from 'react-router'

const PrivateRouter = ({children}) => {

  const {user, loading} = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <Loading />
  }

  if(!user){
    return <Navigate state={{from:location}} to={'/login'}/>
  }

  return children

  // if(user && user?.email){
  //   return Children
  // }

  // return <Navigate state={location.pathname} to={'/login'}/>
}

export default PrivateRouter