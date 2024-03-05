import {medecine1, medecine2, medecine3} from "@/assets";
import { Carousel } from "flowbite-react";


const Hero = () => (
  <Carousel slideInterval={6000} indicators={false} leftControl={false} rightControl={false}>
    <div className="relative h-[800px]">
      <img src={medecine1} alt="profile" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Accompagnement Tout au long de votre Parcours Médical</h1>
          <p className="mt-4">Chez Waldari, nous facilitons l'accès aux meilleurs soins de santé en Égypte, avec des réductions sur les billets de voyage et l'obtention de visas en seulement 3 jours.</p>
          {/* <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">Contactez-nous</button> */}
        </div>
      </div>
    </div>
    <div className="relative h-[800px]">
    <img src={medecine2} alt="profile" className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Votre Destination pour des Soins Médicaux de Qualité</h1>
          <p className="mt-4">Découvrez les avantages de choisir l'Égypte pour vos besoins médicaux et profitez d'une expérience de soins de santé exceptionnelle.</p>
          {/* <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">En savoir plus</button> */}
        </div>
      </div>
    </div>
    <div className="relative h-[800px]">
    <img src={medecine3} alt="profile" className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Choix d'Hôpitaux Adapté à vos Besoins</h1>
          <p className="mt-4">Nous vous offrons une sélection d'hôpitaux de renom en Égypte, avec des équipements de pointe et des professionnels de la santé expérimentés.</p>
          {/* <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">Explorer les Hôpitaux</button> */}
        </div>
      </div>
    </div>
  </Carousel>
);

export default Hero;
