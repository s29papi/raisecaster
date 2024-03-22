import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
   
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return null;
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1500px] max-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-20'>RaiseCaster</h1>

        <ul className='hidden md:flex'>
          <li className='p-4'>
            <Link to="/FAQ">FAQ</Link>
          </li>

          {ready && authenticated ? ( 
            <div>
                 <textarea
                   readOnly
                   value={JSON.stringify(user, null, 2)}
                   style={{ width: "600px", height: "250px", borderRadius: "6px" }}
                 />
                 <br />
                 <button onClick={logout} style={{ marginTop: "20px", padding: "12px", backgroundColor: "#069478", color: "#FFF", border: "none", borderRadius: "6px" }}>
                   Log Out
                 </button>
            </div>
          ) : (
            <button onClick={login} className='bg-[#00df9a] w-[80px] h-[30px] my-3 mx-3 rounded-md font-sm text-black'>Sign In <FontAwesomeIcon icon={faRightToBracket} /></button>
          )}
         
        </ul>
    </div>
  )
}

export default Navbar
