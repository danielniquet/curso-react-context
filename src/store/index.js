import React, { Component, createContext } from 'react';

const {Provider, Consumer} = createContext()

class ContextStore extends Component{
   changeName=()=>{
      this.setState({user:{name:'Michael Jackson'}})
   }
   state={
      user:{name:'John Doe'},
      changeName: this.changeName,
   }
   render(){
      return (
         <Provider value={this.state}>
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
export {ContextStore}