import AdminActivateUser from '../components/activateUser/admin_activateuser.component';
import Navbar from '../components/nav/navbar';
import decodeToken from '../controller/token/decodeToken';

const DashboarUsers = () => {
    let token = decodeToken()
    if(token.role === 'Admin'){
        return (
            <div>
                <Navbar/>
                <AdminActivateUser/>
            </div>
    )
    } else if(token.role === 'Leader') {
        return (
            <div>
                <Navbar/>
                <AdminActivateUser/>
            </div>
    )
    } else {
        window.location.replace('/login')
    }

}

export default DashboarUsers;