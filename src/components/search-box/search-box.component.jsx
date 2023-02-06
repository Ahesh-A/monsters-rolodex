//import { Component } from "react";

const SearchBox = ({className, placeholder, changeHandler}) =>{
    
    return (
        <input
                className = {className}
                type = 'search'
                placeholder = {placeholder}
                onChange = {changeHandler}
            />


    );
}
// class SearchBox extends Component{
//     render(){
        
//         return(
//             <input
//                 className = {this.props.className}
//                 type = 'search'
//                 placeholder = {this.props.placeholder}
//                 onChange = {this.props.changeHandler}
//             />

//             )
//     }
        
// }

export default SearchBox;