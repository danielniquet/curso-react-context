import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ContextStore} from '../store'
import App from '../App'
import Users from './Users'

export default () => 
   <BrowserRouter>
      <Switch>
         <Route exact path="/" render={props=><ContextStore comp={<App />} />} />
         <Route exact path="/users" render={props=><ContextStore comp={<Users />} />} />
         <Route exact path="/posts" component={App} />
      </Switch>
   </BrowserRouter>