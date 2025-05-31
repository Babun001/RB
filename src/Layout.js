import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar01";
import SecondaryNavbar from "./Components/Navbar02";

import FooterSection from "./Components/Footer";


export default function Layout() {
    return (
        <>
            <Navbar />
            <SecondaryNavbar />

            <main>
                <Outlet />
            </main>
            <FooterSection/>
        </>
    )
}