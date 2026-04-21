import Button from"./Button";
function Profile({name, role,city})
    {
        
         return <div className="bg-white text-black shadow p-4 m-2 rounded-lg w-max hover:bg-blue-200 transition duration-300">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600 font-bold">{role}</p>
            <p className="text-gray-500 font-bold">{city}</p>
         </div>
     }
    export default Profile;
