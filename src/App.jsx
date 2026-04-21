import Hero from "./components/Hero";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import{Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
function App() {
  
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </>
  );
}
export default App;


//  {/*       
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 m-5" >Welcome to My Employee List App</h1>
//       <div className="p-2 flex  items-center justify-center gap-4 
//       bg-gray-100 max-w-5xl mx-auto rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
//       <form className="flex flex-wrap gap-4" onSubmit={(e) => {
//         e.preventDefault(); // prevent page refresh
//         addUser(); // call addUser function
//       }}>
//         <input
//           className="border p-2"
//           placeholder="Enter name"
//           value={nameMember} // bind input value to state
//           onChange={(e) => setName(e.target.value)} // update state
//         />
//         <input
//           className="border p-2"
//           placeholder="Enter job role"
//             value={roleMember} // bind input value to state
//           onChange={(e) => setRole(e.target.value)} // update state
//         />
//         <input
//           className="border p-2"
//           placeholder="Enter city"
//           value={cityMember} // bind input value to state
//           onChange={(e) => setCity(e.target.value)} // update state
//         />
//          <input
//           className="border p-2"
//           placeholder="Enter email"
//           value={email} // bind input value to state
//           onChange={(e) => setEmail(e.target.value)} // update state
//         />


//         {/* dynamic text /*/}
//         {/* <button type="submit"className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-600 transition duration-300 rounded"
          
//         >
//           Add User
//         </button>
//        </form>
//     </div>

//       <div className="flex flex-wrap gap-4 p-5 
//      bg-gray-100 max-w-5xl mx-auto mt-10 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 
//         ">
//         {
//           users.map((member, index) => {
//             return <Profile key={index} name={member.name} role={member.role} city={member.city} />
//           })
//         }

//       </div>
//       <div className="flex flex-col items-center justify-center m-5 gap-4">

//         {/* display value */}
//         {/* <h1 className="text-3xl text-green-700 ">Total Members:{users.length}</h1> */} */} */}

//         {/* increase
//         <button
//           className="bg-green-400 text-white px-4 py-2 hover:bg-green-600 transition duration-300 rounded"
//           onClick={() => setCount(count + 1)}
//         >
//           Increase
//         </button> */}

//         {/* decrease
//         <button
//           className="bg-red-400 text-white px-4 py-2 hover:bg-red-600 transition duration-300 rounded 
//           disabled={users.length === 0} // disable button when count is 0 click"
//           onClick={deleteUser}
//         >
//           Decrease
//         </button> */}

//       {/* </div>

    
//     // <div className="flex items-center justify-center h-screen bg-gray-500 ">
//     //   <Button text="Click Me"/>
//     //   <Button text="Submit"/>
//     //   <h1 className="text-4xl font-bold text-white"> 
//     //      {
//     //       names.map((name,index)=>{
//     //         return <Hero key={index} name={name}/>

//     //       })
//     //       }
//     //   </h1> */}