import React from 'react'
import Toolbar from '../toolbar';
import WrapperConsumer, {ActionTypes}  from '../store';


class Posts extends React.Component{
   componentDidMount() {
      console.log(this.props);
      const {posts, dispatch} = this.props.context
      if(posts.length===0){
         dispatch({type: ActionTypes.GET_POSTS})
      }
   }

   render(){
      const {context:{posts,dispatch}} = this.props;
      return (
         <div>
            <button onClick={e=>dispatch({type: ActionTypes.ADD_POST})}>Agregar post</button>
            <ul>
               {
                  posts.map((item,index)=>(
                     <li key={item.id}>{item.episode_id} - {item.title} <small>{item.release_date}</small></li>
                  ))
               }
            </ul>
         </div>
      )
   }
}

export default WrapperConsumer(Posts)