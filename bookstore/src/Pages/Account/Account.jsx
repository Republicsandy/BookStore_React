import React from 'react'
import { useState, useNavigate } from 'react'
import bookcart from '../../Assets/account.png'
import Signin from '../../Components/Signin/Signin'
import Signup from '../../Components/Signup/Signup'



function Account() {
    const [account, setAccount] = useState(true)
    function listenToSignin() {
        setAccount(false)
    }
    
    function listenToSignup() {
        setAccount(true)
    }
    return (
        <div className='mainacc'>
             <div className='logoacc'>
             <img src={bookcart} style={{ width: "250px", height: "250px", borderRadius: "50%", marginLeft: "53px" }} />
             <h3 style={{ marginLeft: "71px" }}>ONLINE BOOK SHOPPING</h3>
             </div>
             <div className='formacc'>
             {
                    account ? <Signin listenToSignin={listenToSignin} /> : <Signup listenToSignup={listenToSignup} />
                }
                 </div>
        </div >
        )
    }
    
    export default Account