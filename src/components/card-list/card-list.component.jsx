//import {Component} from 'react';
import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component';

const CardList = (props) =>{
    const{monsters} = props;
    return (

        <div className = 'card-list'>
                 {
                     monsters.map((monster) =>{
                         //const{name, email, id} = monster
                         return (

                             <CardContainer
                                key = {monster.id}
                                details = {monster}
                             />
//                         // <div className='card-container' key = {id} >
//                         //     <img src = {`https://robohash.org/${id}?set=set1&size=180x180`} alt = {`monster ${id}`} />
//                         //     <h2>{name}</h2>
//                         //     <p>{email}</p>
//                         // </div>
                     )})
                 }
             </div>
         )
    
} 
// class CardList extends Component{
//     render(){
//         console.log(this.props)
//         const {monsters} = this.props
//         return (            
//             <div className = 'card-list'>
//                 {
//                     monsters.map((monster) =>{
//                         //const{name, email, id} = monster
//                         return (
//                             <CardContainer
//                                 details = {monster}
//                             />
//                         // <div className='card-container' key = {id} >
//                         //     <img src = {`https://robohash.org/${id}?set=set1&size=180x180`} alt = {`monster ${id}`} />
//                         //     <h2>{name}</h2>
//                         //     <p>{email}</p>
//                         // </div>
//                     )})
//                 }
//             </div>
//         )
//     }
// }

export default CardList;