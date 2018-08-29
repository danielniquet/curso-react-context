import React from 'react'
import Toolbar from '../toolbar';
import WrapperConsumer, {ActionTypes} from '../store';


class Users extends React.Component{

   componentDidMount() {
      console.log(this.props);
      const {user, dispatch } = this.props.context
      if(!user.name){
         dispatch({type: ActionTypes.GET_USER})
      }
   }

   render(){
      const {context:{user, dispatch}} = this.props;
      return (
         <div>
            <Toolbar />
            <h1>Hola {user.name}</h1>
            <button onClick={e=>dispatch({type: ActionTypes.CHANGE_NAME})}>Cambiar nombre</button>
         </div>
      )
   }
}

export default WrapperConsumer(Users)