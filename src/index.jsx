import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Boutoncta from './Components/Boutoncta/Boutoncta';
import Reseauxsociaux from './Components/Reseauxsociaux/Reseauxsociaux'; 
import Barreservice from './Components/Barreservice/Barreservice';
import Accueil from './pages/Accueil';
import Presentation from './pages/Presentation';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './Components/Footer/Footer';
import Informations from './pages/Informations';


//import LoadingScreen from './Components/LoadingScreen/LoadingScreen'; // Importez le composant de chargement
import './index.css';

const App = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <>
            
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/presentation" element={<Presentation />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/realisations" element={<Realisations />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/informations" element={<Informations />} />
  
                    </Routes>
                    <Reseauxsociaux />
                    <Footer />
                </Router>
            
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
