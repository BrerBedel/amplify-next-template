"use client";

import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Navbar = () => {
  const { user, signOut } = useAuthenticator();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>⚡ My App</h2>
        <ul className="nav-links">
          <li>
            <Link href="/">🏠 Home</Link>
          </li>
          <li>
            <Link href="/dashboard">📊 Dashboard</Link>
          </li>
          <li>
            <Link href="/settings">⚙️ Settings</Link>
          </li>
        </ul>
        <button className="signout-button" onClick={signOut}>
          🚪 Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
