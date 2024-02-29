import { WhyChooseUs } from "@/components"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import styles from "@/styles"
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
            <Stats />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX}, ${styles.flexStart}`}>
          <motion.div   animate
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            className={`${styles.boxWidth}`}>
            <WhyChooseUs />
            <Testimonials />
          </motion.div>
      </div>

      <div className={`${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Footer />
         </div>
       </div>
    </div>
  )
}

export default Home