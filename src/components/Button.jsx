import { Link } from "react-router-dom";
function Button({ text, name, role, city }) {
    return (
        <>
            <Link to="/contact" className="bg-blue-400 text-white px-1 py-1 rounded m-4 
                       hover:bg-blue-600 transition duration-300
                       "
                       
                       >{text}</Link>
        </>)
}
export default Button;