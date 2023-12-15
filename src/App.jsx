import { useState } from 'react'
import { ReactDOM } from 'react'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import CarAuction from './CarAuction'
import CarDetail from './CarDetail'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <BrowserRouter>
//     <Routes >
//       <Route path='/' element={<Login/>}></Route>
//       <Route path='/signup' element={<Signup/>}></Route>
//       <Route path='/home' element={<Home/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }


// function App() {
//   // Initialize user state with null (no user data) at the beginning
//   const [user, setUser] = useState(null);

//   // Define a function to set the user data
//   const setUserData = (userData) => {
//     setUser(userData);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login setUser={setUserData} />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* Pass the user state to the Home component */}
//         <Route path="/home" element={<Home user={user} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  const [user, setUser] = useState(null);

  const setUserData = (userData) => {
    setUser(userData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home user={user} />} />
        {/* <Route path="/cars" element={<CarAuction />} /> */}
        <Route path="/cars" element={<CarAuction userid={user?.id} username={user?.username} />} />
        <Route path="/car/:carId" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
