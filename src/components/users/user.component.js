const User = ({user}) => {
    return (
        <div id="users-table3">
            <tr >
                <td id="col-user">{user.id}</td>
                <td id="col-user2">{user.name}</td>
                <td id="col-user3">{user.accountStatus}</td>
                <td id="col-user4">{user.role}</td>
                <td id="col-user5">{user.email}</td>
            </tr>
        </div>
    )
}

export default User;