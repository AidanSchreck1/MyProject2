import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
return (
    <div className="relative min-h-screen">
        <div className="pb-24">
            <Header />
            <Outlet />
            
        </div>
        <Footer />
    </div>
    );

};

export default AppLayout;