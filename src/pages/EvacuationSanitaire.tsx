import { evacuationIcon } from '@/assets';
import styles from '@/styles';
import { Link } from 'react-router-dom';

const EvacuationSanitaire = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      {/* Section avec l'image et le contenu textuel */}
      <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
        <div className='flex flex-col min-h-screen items-center'>
          {/* Image */}
          <img src={evacuationIcon} className='w-full max-h-[50%] max-w-[50%]' alt='Evacuation Sanitaire' />
          {/* Contenu textuel */}
          <div className="flex flex-col justify-center mb-0 text-center z-[1]">
            <h2 className='text-green-400 font-bold xs:text-[48px] text-[40px] w-full'>
              Evacuation Sanitaire
            </h2>
            <p className={`${styles.paragraph} max-w-[90%] mt-5`}>
              Chez Waldari, nous sommes dédiés à fournir des services d'évacuation sanitaire rapides et efficaces pour les patients nécessitant un transfert médical vers des installations de soins de santé appropriées. Notre équipe expérimentée est là pour vous accompagner à chaque étape du processus, assurant votre sécurité et votre confort.
            </p>
            {/* Call-to-Action (CTA) */}
            <Link to="/contact" className="mt-8 inline-block px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-green-400 transition duration-300 ease-in-out">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvacuationSanitaire;
