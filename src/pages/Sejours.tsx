import { motion } from 'framer-motion';
import { evacuationIcon } from '@/assets';
import styles from '@/styles';

const Sejours = () => {
  return (
    <div className="w-full overflow-hidden">
    <div>
    <div className="relative h-[500px]">
      <img src={evacuationIcon} alt="evacuationIcon" className="w-full h-full object-cover" />
    </div>
  </div>
      <div className={`bg-white mt-24 md:mt-18 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-6">Waldari vous propose un séjour médical confortable et sécurisé</motion.h1>
                <div className='bg-green-200 py-5'>
                    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">et met à votre disposition une palette de médecins hautement qualifiés, des établissements à la pointe de la technologie et un personnel médical des plus compétents.</motion.p>
                    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">Spécialisée dans le tourisme médical, Waldari offre une panoplie d’interventions médicales en Égypte respectant les normes les plus strictes de la déontologie médicale. Si vous cherchez un séjour médical abordable en Égypte se déroulant dans les meilleures conditions possibles, notre clinique vous propose un séjour tout compris (intervention, hébergement, déplacement et assistance) et des prestations de qualité, réalisées par des médecins expérimentés.</motion.p>
                    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">Un séjour médical en Égypte consiste à bénéficier de l’organisation complète de votre voyage pour une intervention médicale. La préparation de ce séjour médical commence dès le premier contact pour obtenir un devis jusqu’à votre retour. Ces étapes incluent la préparation du devis, l’avis et l’indication du médecin, la préparation de votre dossier médical avec toutes les analyses nécessaires, la planification de votre vol et transfert vers la clinique, ainsi que la réservation de l’hôtel. Tout votre voyage est organisé au préalable par notre agence, vous n'avez donc rien à gérer.</motion.p>
                    <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">Décider de choisir l'Égypte comme destination pour votre séjour médical présente plusieurs avantages. L'Égypte est connue pour la qualité des soins médicaux et des cliniques à la pointe de la technologie, respectant les normes internationales. De plus, les coûts d'un séjour médical en Égypte sont généralement moins élevés que dans d'autres pays, tout en offrant la même qualité de service et des résultats satisfaisants.</motion.p>
                </div>
            <h2 className="text-2xl font-bold mt-5">Pour organiser votre séjour médical en Égypte avec Waldari, voici les étapes à suivre :</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 1: Le premier contact</h3>
              <p>Contactez-nous via notre site internet, par e-mail, par téléphone ou sur notre page Facebook pour nous adresser vos demandes. Remplissez le formulaire de devis gratuit en précisant tous les détails sur l'intervention médicale souhaitée.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 2: L'offre de soins et de prise en charge</h3>
              <p>Une fois le diagnostic du médecin établi, nous vous enverrons une proposition de soins complète, comprenant la description de votre séjour à l'hôpital, les soins de suite éventuels et notre offre touristique personnalisée.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 3: La planification de votre arrivée</h3>
              <p>Une fois votre billet d'avion acheté, nous organiserons les modalités de votre séjour dans les meilleures conditions. Nous vous enverrons par e-mail le planning de votre séjour médical en Égypte, ainsi que le rendez-vous de consultation avec votre médecin.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 4: L'arrivée et le transport</h3>
              <p>Dès votre arrivée à l'aéroport, nous prendrons en charge vous et vos proches. Un assistant vous accueillera avec une pancarte mentionnant votre nom, il sera votre accompagnant et sera à votre disposition tout au long de votre séjour. Il vous conduira jusqu'à la clinique et répondra à toutes vos questions concernant le séjour.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 5: L'hospitalisation</h3>
              <p>Nous veillerons à votre installation dans la clinique et faciliterons la partie administrative. Nous serons présents lors de la visite du médecin et répondrons à toutes vos questions. Avant l'intervention, nous nous assurerons de votre bien-être en vous offrant le meilleur service et en assistant vos accompagnants.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 6: La convalescence</h3>
              <p>Après l'intervention, nous nous assurerons que tout s'est parfaitement déroulé. Pour la suite de votre convalescence, nous assurerons votre transfert dans un hôtel prestigieux où règne luxe, calme et détente, tout en respectant la qualité de vie des patients. La clinique se chargera d'organiser votre consultation postopératoire avec votre médecin, ainsi que tous les soins nécessaires.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 7: Le départ</h3>
              <p>À la fin de votre séjour médical en Égypte avec Waldari, notre assistant vous accompagnera jusqu'à l'aéroport du Caire et s'assurera de votre embarquement.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Étape 8: Le suivi à distance</h3>
              <p>Une fois de retour chez vous, vous disposerez de tous les éléments de contact pour nous faire part de vos remarques ou de vos questions. Nous serons toujours à l'écoute et répondrons à toutes vos demandes.</p>
            </div>
            {/* Ajoutez les autres étapes de la même manière */}

            <p className="mb-4">N'hésitez pas à nous contacter pour plus d'informations ou pour obtenir un devis gratuit. Nous sommes là pour vous aider et vous accompagner tout au long de votre séjour médical en Égypte avec Waldari.</p>

          </section>
        </div>
      </div>
    </div>
  );
}

export default Sejours;


