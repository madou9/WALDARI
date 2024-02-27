import { homestay, hospital, mission, passport } from '@/assets'
import styles from '@/styles'
import { motion } from 'framer-motion'


type Props = {
    title: string,
    icon: string,
    text: string,
}


export const InfoCard = ({ title, icon, text }: Props) => (
    <div className="flex p-4 flex-col border w-full h-[100%] bg-gray-100 border-gray-200 text-left rounded-xl shadow-sm dark:border-gray-700">
      <motion.div animate={{ scale: [0.97, 1, 1, 0.97] }}  transition={{ repeat:Infinity, duration: 5 }} className='flex items-start justify-end'>
        <img src={icon} alt={title} className='contain w-[20%] md:px-0' />
      </motion.div>
        <div className='flex flex-col'>
            <h2 className={`font-poppins font-bold  text-[24px] text-primary w-full`}>{title}</h2>
            <p className={`font-poppins font-normal text-gray-500 mt-4 mb-3 leading-[30px] text-[16px] `}>
            {text}
            </p>
        </div>
    </div>
)

const AboutUse = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
        <div className={`bg-white mt-24 md:mt-18 ${styles.flexStart},  ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>

            {/* section 1 */}

            <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
                <div className="w-full flex flex-col justify-center mb-0 text-center z-[1]">
                    <h2 className='text-green-400 font-bold xs:text-[48px] text-[40px] w-full'>
                        Services
                    </h2>
                    <p className={`${styles.paragraph} max-w-[90%] mt-5`}>
                    Chez Waldari, notre mission est d'accompagner vers les meilleurs soins de santé en Égypte, offrant également des 
                    réductions sur les billets de voyage pour faciliter l'accès aux traitements médicaux de qualité.
                    </p>
                </div>


            <div className="max-w-[90rem] overflow-hidden py-10 sm:px-6 lg:px-8 lg:py-3 mx-auto">
              {/* <!-- Grid --> */}
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:items-center">
                <InfoCard title={'Faciliter de logement'} icon={homestay}  text={'Profitez de la facilité de trouver un logement adapté à vos besoins en Égypte.'}/>
                <InfoCard title={'Faciliter d\'obtention de visa '} icon={passport} text={'Obtenez votre visa en seulement 3 jours pour votre séjour en Égypte.'} />
                <InfoCard title={'Meilleur Hopital'} icon={hospital} text={'Découvrez notre sélection d\'hôpitaux adaptés à vos besoins pour une prise en charge personnalisée en Égypte avec une réduction dans les hospitalisation.'} />
              </div>
            </div>
            </section>

            {/* section 2 */}
            <section className={`${styles.paddingY} flex flex-col md:flex-row px-4 md:px-0`}>
                <div className={`${styles.flexStart} flex-1 flex-col`}>
                    <h2 className='text-green-400 font-bold font-poppins xs:text-[48px] text-[40px] w-full'>
                        Introduction
                    </h2>

                    <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                        Bienvenue à Waldari où nous vous fournissons tout les information et nous vous accompagnons tout au long de votre processus.
                    </p>
                </div>

                <div className={`${styles.flexCenter} flex flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                    <img src={mission} alt="Mission" className='w-[100%] h-[100%] md:w-[75%] md:px-0' />
                </div>
            </section>

            {/* section 2 */}
            <section className={`flex md:flex-row flex-col-reverse ${styles.paddingY} px-4 md:px-0`}>
            <div className={`flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
              <img src={mission} alt="Mission" className="w-[100%] h-[100%] md:w-[75%] relative" />
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <h2 className={`text-green-400 font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
              Our Mission & Vision
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda sequi maiores 
                    eius perspiciatis mollitia repudiandae eos delectus deserunt aspernatur, 
                    doloremque amet velit, dolores aliquam quasi exercitationem. Animi, eligendi vitae.
              </p>
            </div>
          </section>

            <section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
                <div className={`flex-1 ${styles.flexStart} flex-col`}>
                <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
                    Our History
                </h2>
                <hr className='text-primary' />
                <p className={`${styles.paragraph} mt-5 max-w-[470px]`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda sequi maiores 
                    eius perspiciatis mollitia repudiandae eos delectus deserunt aspernatur, 
                    doloremque amet velit, dolores aliquam quasi exercitationem. Animi, eligendi vitae.
                </p>
                </div>
                <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
              <img src={mission} alt="mission" className='w-[100%] h-[100%] md:w-[75%] md:px-0' />
            </div>
            </section>

            </div>
        </div>

        {/* footer */}
        <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           {/* <Footer /> */}
         </div>
       </div>

    </div>
  )
}

export default AboutUse