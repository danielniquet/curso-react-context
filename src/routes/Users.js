import React, {Fragment} from 'react'
import Toolbar from '../toolbar';
import WrapperConsumer from '../store';


class Users extends React.Component{
   componentDidMount() {
      console.log(this.props);
   }

   render(){
      const {context:{user, changeName}} = this.props;
      return (
         <div>
            <Toolbar />
            <h1>Hola {user.name}</h1>
            <button onClick={changeName}>Cambiar nombre</button>
         </div>
      )
   }
}

export default WrapperConsumer(Users)