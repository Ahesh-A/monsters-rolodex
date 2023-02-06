//import { Component } from "react";
import './card-container.styles.css'

const CardContainer = ({details : {id, name, email}}) =>{
    //const {id, name, email} = props.details;
    return(
        <div className='card-container' key = {id} >
                             <img src = {`https://robohash.org/${id}?set=set1&size=180x180`} alt = {`monster ${id}`} />
                             <h2>{name}</h2>                           <p>{email}</p>
                         </div>
    )
}
// class CardContainer extends Component{
//     render(){
//         const { id, name, email } = this.props.details;
//         return(
//             <div className='card-container' key = {id} >
//                             <img src = {`https://robohash.org/${id}?set=set1&size=180x180`} alt = {`monster ${id}`} />
//                             <h2>{name}</h2>
//                             <p>{email}</p>
//                         </div>
//         )
//     }
// }

export default CardContainer;