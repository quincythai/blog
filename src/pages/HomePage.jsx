import TopBar from "../components/TopBar";
import '../styles/normalize.css';
import '../styles/Page.css'
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const HomePage = () => {
    const headingStyle = {
        textAlign: 'center', // Define the CSS properties and values here
        fontSize: '40px',
    };

    return (
        <>
            <TopBar/>
            <h1 style={headingStyle}>Welcome to The Gilgamesh Times.</h1>
            <Gallery/>
        </>
    );
}

export default HomePage;
