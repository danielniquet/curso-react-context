import React, { Component, createContext } from 'react';
import ActionTypes from './ActionTypes'
import reducer from './reducers'

const {Provider, Consumer} = createContext()


class ContextStore extends Component{
   state={
      user:{},
      posts:[],
      dispatch: async action => {
        const response = await reducer(this.state, action)
        this.setState( response ) 
      }
   }
   render(){
      const {store} = this.props
      const {dispatch} = this.state
     
      return (
         <Provider value={store?{[store]:this.state[store], dispatch}:this.state}>
            {this.props.comp}
         </Provider>
      )
   }
}

const WrapperConsumer = (Component) => {
   return (props) => {
     return (
       <Consumer>
         {context => <Component {...props} context={context} />}
       </Consumer>
     );
   };
 }

export default WrapperConsumer;
export {ActionTypes}
export {ContextStore}