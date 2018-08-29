import {ActionTypes} from './'
import _orderBy from 'lodash/orderBy'

export default async (state, action) => {
   console.log('Reducing:', action);
   switch(action.type){
      case ActionTypes.GET_USER:
         const response = await fetch('https://swapi.co/api/people/11/?format=json')
         const user = await response.json()
         return {user}
      
      case ActionTypes.CHANGE_NAME:
         return {user:{name:'Michael Jackson'}}
      
      case ActionTypes.ADD_POST:
         return {posts: [...state.posts, {id:6, title:'Post 6'} ] } 
      
      case ActionTypes.GET_POSTS:
         const responseFilms = await fetch('https://swapi.co/api/films/?format=json')
         const films = await responseFilms.json()

         return {posts: _orderBy(films.results, ['episode_id'], ['asc']) }
      
     default:
       null
   }
 }