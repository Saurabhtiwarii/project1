import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
  const [users,setUsers] = useState([]);
  const url = 'https://api.github.com/users';
  

  // useEffect(() => {
  //   fetch(url)
  //   .then(result => result.json())
  //   .then(json => setUsers(json))
  // }, []);

  // const getusers = users.map(
  //   (user,index) =>(
  //     <li className="card">
  //     <div className="user-img"> <img src={user.avatar_url} alt=""/></div> 
  //       <p>{user.login}</p>
  //     </li>
  //   )
  // )
// console.log(users);
  

  return (
    <div className="App">
     <h1>GitHub Users </h1>
     <ul className="cards">
       {/* {getusers} */}
     </ul>
    </div>
  );
}

export default App;
