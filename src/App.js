import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Apps from './config/Routes';
import Footer from './components/footer/Footer';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='*'
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