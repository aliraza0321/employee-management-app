import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-black text-white font-bold p-4 flex justify-between">
      <h1>My App</h1>
      <div className="space-x-4">
        <Link to="/" className=" text-white px-1 py-1 rounded m-4 
                       hover:bg-blue-600 transition duration-300
                       "
                       >Home</Link>
        <Link to="/about"className=" text-white px-1 py-1 rounded m-4 
                       hover:bg-blue-600 transition duration-300
                       "
                       >About</Link>
         <Link to="/contact" className=" text-white px-1 py-1 rounded m-4 
                       hover:bg-blue-600 transition duration-300
                       "
                       
                       >Contact US</Link>
        
      </div>
    </div>
  );
}export default Navbar;