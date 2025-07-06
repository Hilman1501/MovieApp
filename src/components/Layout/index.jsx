import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./index.module.css";

function Layout ({children}){
    return (
        <>
        <Navbar/>
        <main>
            <container>{children}</container>
        </main>
        <Footer/>
        </>
    );
}
export default Layout;