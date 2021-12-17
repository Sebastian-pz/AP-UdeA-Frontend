import jwt_decode from "jwt-decode";

const decodeToken = () => {
    if(localStorage.getItem('authorization')){
        let token = localStorage.getItem('authorization')
    return (jwt_decode(token))
    }
}

export default decodeToken;