//import{ Component } from 'react';
//import logo from './logo.svg';
//import CardList  from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import './components/search-box/search-box.styles.css';
import { useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
const App = () =>{
 
  console.log('render');

  const [searchField, setSearchField] = useState('');
  const[monsters, setMonsters] = useState([]);
  const[filtertedMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {

    console.log('Effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      return response.json()
    })
    .then((result) => setMonsters(result));

  },[]);
  
  useEffect(() =>{
    const filtertedMonsters = monsters.filter((monster) => {
      console.log('monters triggered');
      return monster.name.toLocaleLowerCase().includes(searchField);
        });
    
    setfilteredMonsters(filtertedMonsters);    
  
  },[monsters, searchField]);
  
    //console.log(searchFiled)

  const onSearchChange = (event) =>{
    setSearchField(event.target.value);
  }

  
  
  return (
    <div>
      <h1 className = "app-title">Monsters Rolodex</h1>
      <SearchBox
        className = 'search-box'
        placeholder = 'search monster'
        changeHandler = {onSearchChange}
      />
      
      <CardList
        monsters = {filtertedMonsters}
      />
        </div>
  );
}
// class App extends Component {

  
//   constructor(){
 
//     super();

//     this.state = {
//       monsters : [],
//       searchString : ''
//     };
//   }

//   componentDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) =>{ return response.json()})
//       .then((users) => {this.setState(()=>{
//         return {monsters : users}
//     }   
//     )
//     })
//   }

//   onSearchChange = (event) => {

//     let searchString = event.target.value.toLocaleLowerCase();
//     this.setState( () =>{
//       return {searchString}
//     } )

//   }


//   render (){
//      const {monsters, searchString} = this.state;
//      const {onSearchChange} = this;

//     let filtertedMonsters = monsters.filter((monster) => {
        
//           return monster.name.toLocaleLowerCase().includes(searchString);
        
//     });

//     return (

      

//       <div className = "App">

//         <h1 className = "app-title">Monsters Rolodex</h1>

//          <SearchBox 
//           className = 'search-box'
//           placeholder = 'search monster'
//           changeHandler = {onSearchChange}
//         />

//         <CardList monsters = {filtertedMonsters}/>

//       </div>
//     );
//   }
// }

export default App;
