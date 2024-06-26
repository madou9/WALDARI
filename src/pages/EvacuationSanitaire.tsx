import { ambulance, coutSoin, egypt, evac, tourisMedi, urgence } from '@/assets';
// import Footer from '@/components/Footer';
import styles from '@/styles';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';
// import CTA from '@/components/CTA';

type Props = {
  category: string,
  title: string,
  photo: string,
  message: string,
}

const BlogCard = ({ category, title, photo, message }: Props) => (
  <Card className='mx-2 lg:mx-0 hover:scale-105' imgAlt={title} imgSrc={photo}>
      <p className='uppercase text-sm text-gray-500 font-poppins font-semibold'>{category}</p>
      <Link to={title}>
          <h5 className="text-2xl hover:text-black font-bold tracking-tight text-primary font-poppins dark:text-white">
              {title}
          </h5>
      </Link>
      <p className="text-gray-600 font-poppins text-sm dark:text-gray-400">
          {message}
      </p>
  </Card>
);


const EvacuationSanitaire = () => {
  return (

    <div className=' w-full overflow-hidden bg-whiteGray'>
    {/* <Carousel slideInterval={6000}>
    <div className="relative h-[500px]">
      <img src={evacuationIcon} alt="evacuationIcon" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Accompagnement Tout au long de votre Parcours Médical</h1>
          <p className="mt-4">Chez Waldari, nous facilitons l'accès aux meilleurs soins de santé en Égypte, avec des réductions sur les billets de voyage et l'obtention de visas en seulement 3 jours.</p>
          <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-500">Contactez-nous</button>
        </div>
      </div>
    </div>
  </Carousel> */}
      {/* Section avec les informations */}
      <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
        <div className='flex flex-col min-h-screen'>
          {/* Logo */}
          {/* <img src={evacuationIcon} className='w-full mb-8' alt='Evacuation Sanitaire' /> */}
          {/* Informations */}
          <div className={`${styles.boxWidth}`}>
                    <div className='flex flex-col justify-center text-center gap-3 items-center w-full px-4 mb-7 mt-12'>
                        <h1 className={`px-2 md:w-[70%] font-poppins text-center font-bold text-[25px] md:text-[40px] text-gray-900 w-full`}>
                            <span className='text-green-600'> A Propos de l'Evacuation sanitaire</span>
                        </h1>
                        <p className='font-poppins text-gray-600'>
                            Waldari vous accompagne tout au long du processus d'évacuation sanitaire, assurant un transfert sûr et efficace vers un établissement de soins approprié, que ce soit à l'échelle nationale ou internationale.
                        </p>
                        <p className='font-poppins text-gray-600'>
                          Les cas d'évacuations sanitaires sont pris avec un grand sérieux, en fonction de l’urgence et de la criticité du cas les dispositions nécessaires seront mises en place pour une prise en charge rapide et efficace du patient dès son arrivée En Egypte.
                        </p>

                    </div>
                    <div className="max-w-[90rem] py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center ">
                            <BlogCard title={'Tourisme Médical en Égypte'} photo={evac} category={'Medical'}
                                message={'L\'Égypte a tous les moyens pour être la première destination pour le tourisme médical en Afrique et au Moyen-Orient. Le pays a énormément investi dans ce secteur au point d\'en faire la première destination dans le tourisme de la santé.'} />
                            <BlogCard title={'Coût des Soins Médicaux'} photo={coutSoin} category={'Soins'}
                                message={'L\'Égypte compte environ 600 grands hôpitaux de niveau international. Parallèlement, le coût des soins médicaux est de loin plus faible comparativement à d\'autres pays. Tout comme le coût de la vie et surtout l\'accueil des touristes très peu soumis aux comportements racistes.'} />
                            <BlogCard title={'Transparence des Coûts'} photo={tourisMedi} category={'Transparence'}
                                message={'Chaque évacuation donne lieu à un ensemble de services variés. qui sont tous décrits en details dans le devis avec leur coût associés'} />
                            <BlogCard title={'Un Réseau International'} photo={egypt} category={'Reseaux'}
                                message={'Des relations avec les meilleurs établissements, en fonction des pathologies, pour faciliter la réception des patients évacués.'} />
                            <BlogCard title={'Support 24h/24'} photo={urgence} category={'urgence'}
                                message={'De l\'assistance pour obtenir le visa à la réception de l\'équipe médicale et à l\'arrivée dans le service approprié.'} />
                            <BlogCard title={'Support 24h/24'} photo={ambulance} category={'Support'}
                                message={'Toutes les dispositions seront prises en fonction de létat du patient, même la récupération du patient sur la piste dès l’atterrissage de l’avion.'} />
                        </div>
                    </div>
                </div>
          <div className={`${styles.flexStart}`}>
         {/* <div className={`${styles.boxWidth}`}>
           <CTA />
         </div> */}
       </div>
        </div>
      </section>

        {/* footer
        <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Footer />
         </div>
       </div> */}
    </div>
  );
};

export default EvacuationSanitaire;
