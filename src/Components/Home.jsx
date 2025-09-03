import React, { useState } from "react";
import TopNav from "./TopNavbar";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductCarousel from "./ProductCarousel";
import TrendCards from "./TrendCards";
import FeaturedProducts from "./FeaturedProducts";
import Blog from "./Blog";
import LogosCarousel from "./BrandLogos";

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
            < ProductCarousel />
            <TrendCards />
            < FeaturedProducts />
            <Blog />
            < LogosCarousel />
            <Footer />
        </>
    );
}

export default Home;
