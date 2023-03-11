import React from "react";
import Sidenav from "./Partials/Sidenav";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import Config from "./Partials/Config";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Sidenav></Sidenav>
            <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200 min-h-screen flex flex-col">
                <Navbar></Navbar>
                <div className="w-full px-6 py-6 mx-auto">{children}</div>
                <Footer />
            </main>
            <Config />
        </>
    );
}
