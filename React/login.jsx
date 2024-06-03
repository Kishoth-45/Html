import { useState } from "react";

/*function Sample() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function checkInput() {
        let valid = true;

        // Validate username
        if (username.trim() === "") {
            setNameError("Username can't be blank");
            valid = false;
        } else {
            setNameError('');
        }

        // Validate password
        if (password === "") {
            setPasswordError("Password can't be blank");
            valid = false;
        } else if (password.length <= 6) {
            setPasswordError("Password must be more than 6 characters");
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkInput()) {
            alert("Logged in successfully");
        }
    }

    return (
        <>
            <div className="flex">
                <form id="form" onSubmit={handleSubmit}>
                    <h2>Username</h2>
                    <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
                    <h6>{nameError}</h6>
                    <h2>Password</h2>
                    <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
                    <h6>{passwordError}</h6>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}*/

//Table
/*function Sample() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new user object
    const newUser = { username, age };

    // Add the new user to the list of users
    setUsers([...users, newUser]);

    // Clear the input fields
    setUsername('');
    setAge('');
  };

  const handleRemove = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex">
        <div>
          <form id="form" onSubmit={handleSubmit}>
            <table cellPadding={10}>
              <tbody>
                <tr>
                  <th>Username</th>
                  <td>
                    <input 
                      type="text" 
                      value={username} 
                      id="username" 
                      onChange={(e) => setUsername(e.target.value)} 
                    />
                  </td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>
                    <input 
                      type="text" 
                      value={age} 
                      id="age" 
                      onChange={(e) => setAge(e.target.value)} 
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit">Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
   
        <div className="table">
          <table  cellPadding={20}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}



export default Sample;*/
