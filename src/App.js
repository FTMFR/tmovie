import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Apps from './config/Routes';




function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <Apps />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;