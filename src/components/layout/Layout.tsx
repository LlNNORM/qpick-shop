import Header from '../app-header/app-header';
import Footer from '../app-footer/app-footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/> 
        </div>
    );
};

export default Layout;