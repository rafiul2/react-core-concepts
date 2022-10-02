import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar','noo', 'monowar', 'killer', 'villar'];
  const products = [
    {name:'poto', price:'$90.99'},
    {name:'Illus', price:'$60.99'},
    {name:'PDF', price:'$6.99'}
  ];
  const productsName = products.map(product =>product.name)
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Product product={products[0]}></Product> */}
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <Product pd={product}></Product>)
        }
      </header>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
};


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Dynamic Users:{users.length}</h2>
    <ul>
      {
        users.map(user =><li>{user.name}</li>)
      }
    </ul>
    </div>
    
  )
}



function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.pd;
 
  return (
    <div style={productStyle}>
      <h2>{name} </h2>
      <h1>{price} </h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  
  return (
    <div>
      <h2>Name: {props.name} </h2>
      <p>Profession: {props.job}</p>
    </div>
  )
  
}


export default App;
