import React from "react";

import Link from "next/link";
import AddUsers from "../components/addusers";
import DisplayUsers from "../components/displayusers";

const Navbar = () => 
{
    return (
      <div>
        <AddUsers/>
        <DisplayUsers/>
      </div>
    )
}

export default Navbar;