import { egypt } from "@/assets"
import { features } from "@/constants"
import styles, { layout } from "@/styles"
import { motion } from "framer-motion"

type Props = {
  icon: string,
  title: string,
  content: string,
  index: React.ReactNode
}

const FeaturesCard = ({ icon, title, content, index }: Props) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}>
      <motion.div animate={{ scale: [0.9, 1, 1 , 0.9]}} transition={{repeat:Infinity, duration: 3}} 
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
        <img src={icon} alt="icon"  className="w-[50%] h-[50%] object-contain" />
      </motion.div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-gray-900">{title}</h4>
        <p className="font-poppins text-gray-500 text-[15px] leading-[24px]">{content}</p>
      </div>
    </div>
  )
}

const WhyChooseUs = () => (
    <motion.section initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center md:text-left px-4 md:px-0`}>
            Pourquoi Nous choisir ?  <br className="sm:block hidden"/>Découvrez les avantages de nos services
        </h2>
        <div className={`flex-col ${layout.sectionImg}`}>
            {features.map((feature, index) =>(
              <FeaturesCard icon={feature.icon} 
              title={feature.title} content={feature.content} 
              key={feature.id} index={index} />
            ))}         
        </div>
      </div>
      <div className={layout.sectionImg}>
              <img src={egypt} alt="egypt" className="w-[100%] contain h-[100%] md:h-[90%] md:w-[90%] px-4 md:px-0"/>
      </div>
    </motion.section>
)

export default WhyChooseUs