"use client";

import { Amplify } from "aws-amplify";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import NavBar from "@/components/NavBar"

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
        <Authenticator>
          <NavBar />
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
