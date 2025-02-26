"use client";

import { Amplify } from "aws-amplify";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@aws-amplify/ui-react"; // ✅ Import ThemeProvider
import outputs from "@/amplify_outputs.json";
import Navbar from "@/components/NavBar";

Amplify.configure(outputs);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> {/* ✅ Wrap everything in ThemeProvider */}
          <Authenticator>
            <Navbar />
            <div className="main-content">{children}</div>
          </Authenticator>
        </ThemeProvider>
      </body>
    </html>
  );
}
