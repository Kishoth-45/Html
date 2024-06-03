import React, { useState } from 'react';

/*const Sample=()=> {
    return (

        <div>
            <h1>Hello World</h1>  
            <h1>Date:{new Date().toLocaleDateString()}</h1>      

           <h1> { new Date().toLocaleTimeString()}</h1>
             <ul>
                <li>list 1</li>
                <li>list 2</li>
                <li>list 3</li>
             </ul>
        </div>
    )
}
// const username='React'
// const Sample=<h1>Hello world{username}</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>); */


//className

/*const Sample=()=>{
    return(
        <div>
            <h1 className='kingdom'>Welcome To The Kingdom</h1>
        </div>
    )
}


const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/


/*const mark = 174;
const average = mark / 5;
let result = '';

if (average>90) {
    result = 'The grade is A With ' + average + "%"
} else if (average>75) {
    result = 'The grade is B With ' + average + "%"
} else if (average<35) {
    result = 'Failed! ' + average + "%"
} else {
    result = 'The Grade is C ' + average + "%"

}

const Result = () => {

    return ( 
        <div>
        <h2>Result : {result}</h2>
        </div>
    )
}


const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render( <Result/> ); */

//Ternary operator
// const x=5;

// const myelem=<h2>{x===5?"kingdom":"not"}</h2>



//Clss Component

/*class Sample extends React.Component{
    render(){
        return(
            <div>
                <h2>Welcome To The Kang Dyancity</h2>
            </div>
        )
    }
} */


//props
/*const Sample=(props)=>{
    return(
        <div>
            <h2>Welcome To the Garden</h2>
            <div className='fruits'>
                <h3>Fruit:{props.name}</h3>
                <h3>Taste:{props.taste}</h3>
                <h3>Rate:{props.rate}</h3>
            </div>
        </div>
    )
}*/

 
/*class Sample extends React.Component {
    render(){
    return <h2>King Of Dyanasity</h2>
    }
}

function Kindom(){
    return(
        <div>
            <h3>Avengers Assemble</h3>
            <Sample/>
        </div>
    )
    
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Kindom/>);*/


/*class Sample extends React.Component
{

    constructor(){
        super()
        this.state={name:"apple", rate:100}
    }
    render(){
        return(
            <>
            <h1>Name:{this.state.name} Rate:{this.state.rate}</h1>
            </>
        )
    }
}*/


/*class Sample extends React.Component{
  constructor(props){
    super(props)
    this.state={r1:"orange",r2:"green"}
  }
  render()
  {
    return (
      <>
      <h3 style={{background:this.state.r1}}>Welcome</h3>
      <h3 style={{background:this.state.r2}}>Welcome</h3>
      </>

    )
  }
}*/




//changing the state object

/* class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: {
        from: "Trichy",
        age: 23,  // Corrected to match the reference in render
        name: "Kishoth"
      },
      showData: false
    };

    // Binding methods to ensure proper 'this' context
    this.showData = this.showData.bind(this);
    this.hideData = this.hideData.bind(this);
  }

  showData() {
    this.setState({ showData: true });
  }

  hideData() {
    this.setState({ showData: false });
  }

  render() {
    let data = null;
    
    if (this.state.showData === true) {
      data = (
        <div>
          <h4>Name: {this.state.emp.name}</h4>
          <h4>Age: {this.state.emp.age}</h4>
          <h4>From: {this.state.emp.from}</h4>
          <br />
          <button onClick={this.hideData}>Hide Data</button>
        </div>
      );
    } else {
      data = <button onClick={this.showData}>Show Data</button>;
    }

    return (
      <>
        <h1>Employee Details</h1>
        {data}
      </>
    );
  }
} */


/*class Sample extends React.Component{

  constructor(props){
    super(props)
    this.state={
      emp:{
        id:1001,
        name:'apple',
        rate:100
      },
      showData:false
    }

    this.showData = this.showData.bind(this);
    this.hideData = this.hideData.bind(this);
   
  }

  showData(){
    this.setState({showData:true})
  }
  hideData(){
    this.setState({showData:false})
  }

  render(){

    let data=null;

    if(this.state.showData=== true){

     data= <div>
        <h2>Id:{this.state.emp.id}</h2>
        <h2>Name:{this.state.emp.name}</h2>
        <h2>Rate:{this.state.emp.rate}</h2>
        <button onClick={this.hideData}>Hide Data</button>
      </div>
    }
    else{
      data=<div>
        <button onClick={this.showData}>Show Data</button>
      </div>
    }
    return(
      <div>
        <h1>Fruit Details</h1>
        {data}
      </div>
    )
  }
}*/


/*function Sample(){

  const goal=()=>{
    alert ("goal"+a)
  }

  return(
    <button onClick={(a)=>goal("alert")}>Click</button>
  )
}*/



/*const Sample = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const checkInput = () => {
    let valid = true;

    if (name === '') {
      setNameError('Username must be filled');
      valid = false;
    } else {
      setNameError('');
    }

    if (password === '') {
      setPasswordError('Password must be filled');
      valid = false;
    } else if (password.length <= 6) {
      setPasswordError('Password must be more than 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkInput()) {
      // Form is valid, proceed with submission or other actions
      alert(' Login successfully');
    }
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <div className='login'>
        <h3>UserName</h3>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h6>{nameError}</h6>
        <h3>Password</h3>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h6>{passwordError}</h6>
        <br/>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};*/


//onchange
/*function Sample(){

  const [username,setUsername]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [cource,setCource]=useState('');

  
  const handleSubmit=(event)=>{
      event.preventDefault();
  }

  return(

    
    <>
    <div className='flex'>
    <div>
    <form id='form' onSubmit={handleSubmit}>
      <h3>UserName</h3>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <h3>Age</h3>
      <input type='text' value={age}  onChange={(e)=>setAge(e.target.value)} />
      <h3>Email</h3>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <h3>Cource</h3>
      <input type='text' value={cource}  onChange={(e)=>setCource(e.target.value)} />
      <button type='submit'>SUBMIT</button>
    </form>
    </div>
   <div>
    <table border={1} cellPadding={10}>
      <tr>
        <th>Username</th>
        <th>Age</th>
        <th>Email</th>
        <th>Cource</th>
      </tr>
      <tr>
        <td> {username} </td>
        <td> {age} </td>
        <td> {email} </td>
        <td> {cource} </td>
      </tr>
    </table>
    </div>
    </div>
    </>
  )
}*/

//table
/*function Sample() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new user object
    const newUser = { username, age, email, course };

    // Add the new user to the list of users
    setUsers([...users, newUser]);

    // Clear the input fields
    setUsername('');
    setAge('');
    setEmail('');
    setCourse('');
  };

  return (
    <>
      <div className='flex'>
        <div>
          <form id='form' onSubmit={handleSubmit}>
            <h3>Username</h3>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h3>Age</h3>
            <input
              type='text'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <h3>Email</h3>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Course</h3>
            <input
              type='text'
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
        <div>
          <table border={1} cellPadding={10}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Age</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}*/


//map

/*function Salary(props){
  return <h1> {props.name} </h1>
}
function Sample(){
  const fruits=['Apple','Orange','Mango','Pine apple'];
  return(
    <ul>
      {
        fruits.map(fruit=>{
         return  <Salary name={fruit} />
        })
      }
    </ul>
  )

}*/
//export default Sample;
