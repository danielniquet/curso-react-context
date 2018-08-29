import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ContextStore} from '../store'
import App from '../App'
import Users from './Users'
import Posts from './Posts'
import Nesting from './Nesting'

export default () => 
   <BrowserRouter>
      <Switch>
         <Route exact path="/" render={props=><ContextStore comp={<App />} />} />
         <Route exact path="/users" render={props=><ContextStore comp={<Users />} store='user' />} />
         <Route exact path="/posts" render={props=><ContextStore comp={<Posts />} store='posts' />}  />
         <Route exact path="/nesting" render={props=><ContextStore comp={<Nesting />} />}  />
      </Switch>
   </BrowserRouter>