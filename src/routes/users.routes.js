import UserList from '../components/users/users.component';
import Navbar from '../components/nav/navbar';
import decodeToken from '../controller/token/decodeToken';

const Users = () => {
    let token = decodeToken()
    if(token.role === "Admin" || token.role === "Leader" ){
        return (
            <div>
                <Navbar/>
                <UserList/>
            </div>
        )
    } else {
        window.location.replace('/login')
    }
    

}

export default Users;