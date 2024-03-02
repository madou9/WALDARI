import { Link } from 'react-router-dom';
import { evacuationIcon } from '@/assets';
import styles from '@/styles';
import { evacuationInfo } from '@/constants';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

const EvacuationSanitaire = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      {/* Section avec les informations */}
      <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
        <div className='flex flex-col min-h-screen'>
          {/* Logo */}
          <img src={evacuationIcon} className='w-full mb-8' alt='Evacuation Sanitaire' />
          {/* Informations */}
          <div className="w-full flex flex-col justify-center mb-0 text-center z-[1]">
            <div className="max-w-[90rem] overflow-hidden py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {evacuationInfo.map((info, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-green-400 font-bold text-xl mb-4">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
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
