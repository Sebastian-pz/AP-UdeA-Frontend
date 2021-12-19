import React from "react";
import PendingUsers from "../components/projects/pendingUsers.component";
import Navbar from "../components/nav/navbar";

const PendingUsersLeader = (props) => {
    return(
        <div>
            <Navbar/>
            <PendingUsers props={props}/>
        </div>
    )
}

export default PendingUsersLeader;