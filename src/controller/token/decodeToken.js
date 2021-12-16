import jwt_decode from "jwt-decode";

const decodeToken = () => {
    if(localStorage.getItem('auth_token')){
        let token = localStorage.getItem('auth_token')
    return (jwt_decode(token))
    }
}

export default decodeToken;