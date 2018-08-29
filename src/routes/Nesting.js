import React from 'react'
import Toolbar from '../toolbar';
// import WrapperConsumer from '../store';
import Level2 from '../components/Level2'


class Nesting extends React.Component{
   componentDidMount() {
      console.log(this.props);
   }

   render(){
      // const {context:{user, changeName}} = this.props;
      return (
         <div style={{border:'5px solid red'}}>
            <Toolbar />
            <h1>Nivel 1</h1>
            <Level2 />
         </div>
      )
   }
}

export default Nesting