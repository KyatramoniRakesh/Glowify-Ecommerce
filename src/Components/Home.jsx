import React, { useState } from "react";
import TopNav from "./TopNavbar";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";

function Home() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <>
            <TopNav />
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <Navbar />
            <Banner />
            <Footer />
        </>
    );
}

export default Home;
