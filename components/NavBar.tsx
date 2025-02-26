"use client";

import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Navbar = () => {
  const { user, signOut } = useAuthenticator();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {user ? (
          <li>
            <button onClick={signOut}>Logout</button>
          </li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
