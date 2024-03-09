import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import styles from '@/styles'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col lg:mx-0 bg-green-500 md:rounded-none box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`text-center md:text-left ${styles.heading2}`}>Vous êtes prêt à commencer ?</h2>
      <p className={`font-poppins font-normal text-center md:text-left text-white text-[16px] leading-[30.8px] max-w-[470px] mb-5 mt-5`}>Si vous avez des questions ou des demandes de renseignements, n'hésitez pas à nous contacter.</p>
    </div>

    <motion.div animate={{ scale: [0.9, 1, 1, 0.9] }}  transition={{ repeat:Infinity, duration: 3 }}>
      <Link to={'contact'}>
      <Button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Contactez Nous
        </Button>
      </Link>
    </motion.div>
  </section>
  )
}

export default CTA