import { motion } from 'framer-motion';
import { medecine4, sejour } from '@/assets';
import styles from '@/styles';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Footer from '@/components/Footer';

type Props = {
  number: number;
  title: string,
  description: string
}

const Step = ({ number, title, description }: Props) => (
  <div className="flex items-center mb-6">
    <div className="flex-shrink-0 mr-4">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <AiOutlineCheckCircle className="text-green-500 w-6 h-6" />
      </motion.div>
    </div>
    <div className="mt-5 relative">
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <h3 className="font-bold text-xl mb-2 flex justify-center items-center text-center text-blue-300">Étape {number}: {title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-white opacity-20 rounded-lg shadow-md pointer-events-none"></div>
    </div>
  </div>
)


const Sejours = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-[800px]">
        <img src={sejour} alt="profile" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-6">Waldari vous propose un séjour médical confortable et sécurisé</motion.h1>
            {/* <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">Contactez-nous</button> */}
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className={`bg-white mt-24 md:mt-18 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.paddingY} flex flex-col md:flex-row px-4 md:px-0 container `}>
            {/* Texte d'introduction */}
            <div className={`${styles.flexStart} flex-1 flex-col`}>
              {/* <h2 className='text-green-400 font-bold font-poppins xs:text-[48px] text-[40px] w-full'>
            Bienvenue chez Waldari
        </h2> */}
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 font-poppins text-gray-700 text-[15px] leading-[24px]">
                <p className="mb-4"><span className='font-poppins font-semibold text-[18px] leading-[13px] mb-1 text-gray-600'>Waldari </span>
                  met à votre disposition une palette de médecins hautement qualifiés, des établissements à la pointe de la technologie et un personnel médical des plus compétents.</p>
                <p className="mb-4">Spécialisée dans le tourisme médical, Waldari offre une panoplie d’interventions médicales en Égypte respectant les normes les plus strictes de la déontologie médicale. Si vous cherchez un séjour médical abordable en Égypte se déroulant dans les meilleures conditions possibles, notre clinique vous propose un séjour tout compris (intervention, hébergement, déplacement et assistance) et des prestations de qualité, réalisées par des médecins expérimentés.</p>
                <p className="mb-4">Un séjour médical en Égypte consiste à bénéficier de l’organisation complète de votre voyage pour une intervention médicale. La préparation de ce séjour médical commence dès le premier contact pour obtenir un devis jusqu’à votre retour. Ces étapes incluent la préparation du devis, l’avis et l’indication du médecin, la préparation de votre dossier médical avec toutes les analyses nécessaires, la planification de votre vol et transfert vers la clinique, ainsi que la réservation de l’hôtel. Tout votre voyage est organisé au préalable par notre agence, vous n'avez donc rien à gérer.</p>
                <p className="mb-4">Décider de choisir l'Égypte comme destination pour votre séjour médical présente plusieurs avantages. L'Égypte est connue pour la qualité des soins médicaux et des cliniques à la pointe de la technologie, respectant les normes internationales. De plus, les coûts d'un séjour médical en Égypte sont généralement moins élevés que dans d'autres pays, tout en offrant la même qualité de service et des résultats satisfaisants.</p>
              </motion.div>
            </div>
            {/* Image illustrative */}
            <div className={`${styles.flexCenter} flex flex-1 md:ml-10 ml-0 md:mt-0 mt-10 shadow-inner max-auto`}>
              <img src={medecine4} alt="Mission" className='w-[100%] h-[100%] md:w-[100%] md:px-0' />
            </div>
          </section>
          <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
            <h2 className="text-2xl font-bold mt-5">Pour organiser votre séjour médical en Égypte avec Waldari, voici les étapes à suivre :</h2>
            <div className="mb-6">
              <Step
                number={1}
                title="Le premier contact"
                description="Contactez-nous via notre site internet, par e-mail, par téléphone ou sur notre page Facebook pour nous adresser vos demandes. Remplissez le formulaire de devis gratuit en précisant tous les détails sur l'intervention médicale souhaitée."
              />
              <Step
                number={2}
                title="L'offre de soins et de prise en charge"
                description="Une fois le diagnostic du médecin établi, nous vous enverrons une proposition de soins complète, comprenant la description de votre séjour à l'hôpital, les soins de suite éventuels et notre offre touristique personnalisée."
              />
              <Step
                number={3}
                title="La planification de votre arrivée"
                description="Une fois votre billet d'avion acheté, nous organiserons les modalités de votre séjour dans les meilleures conditions. Nous vous enverrons par e-mail le planning de votre séjour médical en Égypte, ainsi que le rendez-vous de consultation avec votre médecin."
              />
              <Step
                number={4}
                title="L'arrivée et le transport"
                description="Dès votre arrivée à l'aéroport, nous prendrons en charge vous et vos proches. Un assistant vous accueillera avec une pancarte mentionnant votre nom, il sera votre accompagnant et sera à votre disposition tout au long de votre séjour. Il vous conduira jusqu'à la clinique et répondra à toutes vos questions concernant le séjour."
              />
              <Step
                number={5}
                title="L'hospitalisation"
                description="Nous veillerons à votre installation dans la clinique et faciliterons la partie administrative. Nous serons présents lors de la visite du médecin et répondrons à toutes vos questions. Avant l'intervention, nous nous assurerons de votre bien-être en vous offrant le meilleur service et en assistant vos accompagnants."
              />
              <Step
                number={6}
                title="La convalescence"
                description="Après l'intervention, nous nous assurerons que tout s'est parfaitement déroulé. Pour la suite de votre convalescence, nous assurerons votre transfert dans un hôtel prestigieux où règne luxe, calme et détente, tout en respectant la qualité de vie des patients. La clinique se chargera d'organiser votre consultation postopératoire avec votre médecin, ainsi que tous les soins nécessaires."
              />
              <Step
                number={7}
                title="Le départ"
                description="À la fin de votre séjour médical en Égypte avec Waldari, notre assistant vous accompagnera jusqu'à l'aéroport du Caire et s'assurera de votre embarquement."
              />
              <Step
                number={8}
                title="Le suivi à distance"
                description="Une fois de retour chez vous, vous disposerez de tous les éléments de contact pour nous faire part de vos remarques ou de vos questions. Nous serons toujours à l'écoute et répondrons à toutes vos demandes.
            N'hésitez pas à nous contacter pour plus d'informations ou pour obtenir un devis gratuit. Nous sommes là pour vous aider et vous accompagner tout au long de votre séjour médical en Égypte avec Waldari."
              />
            </div>
          </section>
        </div>
      </div>
      {/* footer */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Sejours;


