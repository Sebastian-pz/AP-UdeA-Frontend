import React from 'react';
import Navbar from '../components/nav/navbar';
import decodeToken from '../controller/token/decodeToken';

const home = () => {
    let token = decodeToken()

    if(token){
        return(
            <div>
                <Navbar/>
                <div id="body">
                    <h1>Este es el home</h1>
                </div>
            </div>
        )
    } else {
        return (
            window.location.replace('/login')
        )
    }
    
}

export default home;