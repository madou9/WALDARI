import { useState, useEffect } from 'react';
import { avion, medecine1, medecine2, medecine3 } from "@/assets";
import { motion } from 'framer-motion';

const Hero = () => {
    const images = [
        { src: medecine1, h1:"Accompagnement Tout au long de votre Parcours Médical", text: "Chez Waldari, nous facilitons l'accès aux meilleurs soins de santé en Égypte, avec des réductions sur les billets de voyage et l'obtention de visas en seulement 3 jours." },
        { src: medecine2, h1:"Votre Destination pour des Soins Médicaux de Qualité", text: "Découvrez les avantages de choisir l'Égypte pour vos besoins médicaux et profitez d'une expérience de soins de santé exceptionnelle." },
        { src: medecine3, h1:"Choix d'Hôpitaux Adapté à vos Besoins" , text: "Nous vous offrons une sélection d'hôpitaux de renom en Égypte, avec des équipements de pointe et des professionnels de la santé expérimentés." },
        { src: avion, h1:"Pour vos voyage vers L'Egypte",  text: "Découvrez une expérience de voyage médical unique en Égypte avec Waldari. Nous vous offrons une sélection d'hôpitaux de renom, des équipements de pointe et un personnel médical expérimenté pour vous assurer un séjour médical sécurisé et confortable." }
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Find the height of the tallest image
    const tallestImageHeight = Math.max(...images.map(image => {
        const tempImage = new Image();
        tempImage.src = image.src;
        return tempImage.height;
    }));

    return (
        <div id="default-carousel" className="relative" style={{ height: tallestImageHeight }}>
            <div className="relative h-full overflow-hidden rounded-lg md:h-full">
                {images.map((image, index) => (
                    <div key={index} className={`absolute h-[800px] w-full top-0 left-0 transform transition-transform duration-700 ${index === currentImageIndex ? 'translate-x-0' : '-translate-x-full'}`}>
                        <img src={image.src} alt={`Slide ${index + 1}`} className="block w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-center text-white">
                            <h1 className="text-4xl font-bold">{image.h1}</h1>
                            <p className="mt-4">{image.text}</p>
                            {/* <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">Explorer les Hôpitaux</button> */}
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
