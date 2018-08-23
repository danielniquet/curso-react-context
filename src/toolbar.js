import React from 'react'
import {Link} from 'react-router-dom'
import WrapperConsumer from './store'

const ToolBar = ({context:{user}})=>(
   <div>
      <h1>Bienvenido {user.name}</h1>
      <Link to='/'>Home</Link> /
      <Link to='/users'>Users</Link> /
      <Link to='/posts'>Posts</Link> 
   </div>
)

export default WrapperConsumer(ToolBar)