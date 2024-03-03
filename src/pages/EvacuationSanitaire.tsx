import { coutSoin, egypt, evac, evacuationIcon, sup24, tourisMedi } from '@/assets';
import Footer from '@/components/Footer';
import styles from '@/styles';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';
import CTA from '@/components/CTA';

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
    <div className='bg-white w-full overflow-hidden'>
      {/* Section avec les informations */}
      <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
        <div className='flex flex-col min-h-screen'>
          {/* Logo */}
          <img src={evacuationIcon} className='w-full mb-8' alt='Evacuation Sanitaire' />
          {/* Informations */}
          <div className={`${styles.boxWidth}`}>
                    <div className='flex flex-col justify-center text-center gap-3 items-center w-full px-4 mb-7 mt-12'>
                        <h1 className={`px-2 md:w-[70%] font-poppins text-center font-bold text-[25px] md:text-[40px] text-gray-900 w-full`}>
                            <span className='text-primary'> A Propos de l'Evacuation sanitaire</span>
                        </h1>
                        <p className='font-poppins text-gray-600'>
                            Waldari vous accompagne tout au long du processus d'évacuation sanitaire, assurant un transfert sûr et efficace vers un établissement de soins approprié, que ce soit à l'échelle nationale ou internationale.
                        </p>

                    </div>
                    <div className="max-w-[90rem] py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center ">
                            <BlogCard title={'Tourisme Médical en Égypte'} photo={evac} category={'Medical'}
                                message={'L\'Égypte a tous les moyens pour être la première destination pour le tourisme médical en Afrique et au Moyen-Orient. Le pays a énormément investi dans ce secteur au point d\'en faire la première destination dans le tourisme de la santé.'} />
                            <BlogCard title={'Coût des Soins Médicaux'} photo={coutSoin} category={'Soins'}
                                message={'L\'Égypte compte environ 600 grands hôpitaux de niveau international. Parallèlement, le coût des soins médicaux est de loin plus faible comparativement à d\'autres pays. Tout comme le coût de la vie et surtout l\'accueil des touristes très peu soumis aux comportements racistes.'} />
                            <BlogCard title={'Transparence des Coûts'} photo={tourisMedi} category={'Transparence'}
                                message={'L\'Égypte a tous les moyens pour être la première destination pour le tourisme médical en Afrique et au Moyen-Orient. Le pays a énormément investi dans ce secteur au point d\'en faire la première destination dans le tourisme de la santé.'} />
                            <BlogCard title={'Un Réseau International'} photo={egypt} category={'Reseaux'}
                                message={'Des relations avec les meilleurs établissements, en fonction des pathologies, pour faciliter la réception des patients évacués.'} />
                            <BlogCard title={'Support 24h/24'} photo={sup24} category={'Support'}
                                message={'De l\'assistance pour obtenir le visa à la réception de l\'équipe médicale et à l\'arrivée dans le service approprié.'} />
                        </div>
                    </div>
                </div>
          <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <CTA />
         </div>
       </div>
        </div>
      </section>

        {/* footer */}
        <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Footer />
         </div>
       </div>
    </div>
  );
};

export default EvacuationSanitaire;
