import { feedback } from '@/constants'
import styles from '@/styles'
import FeedbackCard from './FeedbackCard'
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section>
      <div className='w-full flex justify-center text-center items-center md:flex-row flex-col mb-0 relative z-[1]'>
        <h1 className={`px-2 ${styles.heading2}`}>
          Regards ce dont les autres disent <br className='sm:block hidden' /> A propos de nous
        </h1>
      </div>

      <div className='flex flex-col md:flex-row sm:justify-start justify-center w-full relative z-[1]'>
        {feedback.map((card) => (
          <motion.div 
            key={card.id} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FeedbackCard  alt={'card'} {...card} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
