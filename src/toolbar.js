import React from 'react'
import {Link} from 'react-router-dom'
import WrapperConsumer from './store'

const ToolBar = ({context})=>{
   
   return (
   <div>
      <h1>Bienvenido {context.user.name}</h1>
      <Link to='/'>Home</Link> /
      <Link to='/users'>Users</Link> /
      <Link to='/posts'>Posts</Link> / 
      <Link to='/nesting'>Nesting</Link> / 
   </div>
)}

export default WrapperConsumer(ToolBar)