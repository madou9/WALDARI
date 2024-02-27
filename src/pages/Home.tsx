import { WhyChooseUs } from "@/components"
import Hero from "@/components/Hero"
import styles from "@/styles"
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
          <motion.div   animate
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            className={`${styles.boxWidth}`}>
            <WhyChooseUs />
          </motion.div>
      </div>
    </div>
  )
}

export default Home