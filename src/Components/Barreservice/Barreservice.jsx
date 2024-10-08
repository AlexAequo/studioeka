import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Barreservice.css';
import communication from '../Assets/communication.png';
import backoffice from '../Assets/backoffice.png';
import development from '../Assets/development.png';
import communicationIcon from '../Assets/communication-icone.png';
import backofficeIcon from '../Assets/notion-icone.png';
import developmentIcon from '../Assets/web-icone.png';

// Couleurs pour les compétences
const serviceColors = {
    communication: '#3B8C9E',
    backoffice: '#F2A65A',
    development: '#8E44AD'
};

const services = [
    {
        id: 'communication',
        title: 'Communication Digitale & Print',
        image: communication,
        icon: communicationIcon,
        description: 'Boostez votre présence avec des solutions digitales et print de qualité.'
    },
    {
        id: 'backoffice',
        title: 'Back-office Notion',
        image: backoffice,
        icon: backofficeIcon,
        description: 'Optimisez votre gestion avec des outils puissants sur Notion.'
    },
    {
        id: 'development',
        title: 'Développement Web',
        image: development,
        icon: developmentIcon,
        description: 'Créez des sites web performants et élégants adaptés à vos besoins.'
    }
];

const Barreservice = () => {
    const [visibleCards, setVisibleCards] = useState({});
    const cardRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const newVisibleCards = {};
            Object.keys(cardRefs.current).forEach(id => {
                const element = cardRefs.current[id];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (rect.top < windowHeight && rect.bottom > 0) {
                        newVisibleCards[id] = true;
                    } else {
                        newVisibleCards[id] = false;
                    }
                }
            });
            setVisibleCards(newVisibleCards);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="services-container">
            {services.map(service => (
                <motion.div
                    key={service.id}
                    className="service-card"
                    style={{ backgroundColor: serviceColors[service.id] }}
                    whileHover={{ scale: 1.05, boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)' }}
                    initial="hidden"
                    animate={visibleCards[service.id] ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    ref={el => cardRefs.current[service.id] = el}
                >
                    <div className="service-content">
                        <div className="service-header">
                            <img src={service.icon} alt={`${service.title} icon`} className="service-icon-img" />
                            <h3 className="service-title">{service.title}</h3>
                        </div>
                        <div className="service-description">
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="service-image"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                            <p>{service.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Barreservice;

