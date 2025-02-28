"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ChevronDown, ChevronRight } from "lucide-react"; // ✅ Install Lucide for icons: npm install lucide-react

const Navbar = () => {
  const { user, signOut } = useAuthenticator();

  // ✅ State for toggling menus
  const [customerOpen, setCustomerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>⚡ Interop Setup</h2>
        <ul className="nav-links">
          <li>
            <Link href="/">🏠 Home</Link>
          </li>

          {/* Customers Section */}
          <li className="nav-item">
            <button className="nav-button" onClick={() => setCustomerOpen(!customerOpen)}>
              📁 Customers {customerOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {customerOpen && (
              <ul className="nested-menu">
                <li><Link href="/emrcustomer/create">➕ New Customer</Link></li>
                <li><Link href="/emrcustomer/list">📋 View Customers</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Sign Out Button */}
        <button className="signout-button" onClick={signOut}>
          🚪 Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
