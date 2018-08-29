import React from 'react'
import WrapperConsumer, {ActionTypes} from '../store';

const Level5 = ({context:{user, posts,dispatch} }) => {
      if(posts.length===0){
         dispatch({type: ActionTypes.GET_POSTS})
      }
      if(!user.name){
            dispatch({type: ActionTypes.GET_USER})
         }

      return (
   <div style={{border:'5px solid cyan', margin:'20px'}}>
      <h1>Nivel 5</h1>
      Bienvenido <strong>{user.name}</strong>
      <h4>Posts</h4>
      <ul>
            {
               posts.map((item,index)=>(
                  <li key={item.id}>{item.episode_id} {item.title}</li>
               ))
            }
         </ul>
   </div>
)}

export default WrapperConsumer(Level5)