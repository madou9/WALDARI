import { mission } from '@/assets'
// import Footer from '@/components/Footer'
import { Services } from '@/constants'
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
              {Services.map((service, index) => (
            <InfoCard key={index} title={service.title} icon={service.icon} text={service.text} />
              ))}
              </div>
            </div>
            </section>

           {/* Section sur l'entreprise et sa mission */}
<section className={`${styles.paddingY} flex flex-col md:flex-row px-4 md:px-0 container`}>
    {/* Texte d'introduction */}
    <div className={`${styles.flexStart} flex-1 flex-col`}>
        <h2 className='text-green-400 font-bold font-poppins xs:text-[48px] text-[40px] w-full'>
            Bienvenue chez Waldari
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
            Chez Waldari, nous nous engageons à offrir à nos clients une expérience exceptionnelle à chaque étape de leur parcours médical en Égypte. Que vous recherchiez des informations détaillées sur les traitements disponibles, des services d'assistance pour faciliter votre voyage ou un soutien continu pendant votre séjour, notre équipe est là pour vous accompagner.
        </p>
    </div>
    {/* Image illustrative */}
    <div className={`${styles.flexCenter} flex flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
        <img src={mission} alt="Mission" className='w-[100%] h-[100%] md:w-[100%] md:px-0' />
    </div>
</section>

{/* Section sur la mission et la vision */}
<section className={`flex md:flex-row flex-col-reverse ${styles.paddingY} px-4 md:px-0`}>
    {/* Image illustrative */}
    <div className={`flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
        <img src={mission} alt="Mission" className="w-[100%] h-[100%]  md:w-[100%] relative" />
    </div>
    {/* Texte sur la mission et la vision */}
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={`text-green-400 font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
            Notre Mission & Vision
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Chez Waldari, notre mission est de fournir des soins médicaux de classe mondiale aux patients du monde entier, en mettant l'accent sur la qualité, l'accessibilité et l'expérience du patient. Notre vision est de devenir le partenaire de choix pour ceux qui recherchent des solutions de santé innovantes et personnalisées en Égypte.
        </p>
    </div>
</section>

{/* Section sur l'histoire de l'entreprise */}
<section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
    {/* Texte sur l'histoire */}
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={`text-primary font-poppins font-bold xs:text-[48px] text-[40px] w-full`}>
            Notre Histoire
        </h2>
        <hr className='text-primary' />
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
            Depuis nos débuts modestes, nous avons eu le privilège de servir des milliers de clients à travers le monde. Notre histoire est celle d'un engagement constant envers l'excellence, l'innovation et le service à la clientèle. Nous sommes fiers de notre héritage et de notre contribution à l'amélioration des soins de santé dans la région.
        </p>
    </div>
    {/* Image illustrative */}
    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
        <img src={mission} alt="mission" className='w-[100%] h-[100%] md:w-[100%] md:px-0' />
    </div>
</section>

            </div>
        </div>

        {/* footer */}
        {/* <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Footer />
         </div>
       </div> */}

    </div>
  )
}

export default AboutUse