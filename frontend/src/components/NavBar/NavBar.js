import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar= () =>{
    return (
        <div className="flex flex-row-reverse underline">
            <Link className="ml-3"to="/dashboard">Home</Link>
            <Link to="/explore">Explore</Link>
        </div>
    );
}

export default NavBar;
