import styles from '@/styles'
import React from 'react'

const AboutUse = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
        <div className={`bg-white mt-24 md:mt-18 ${styles.flexStart},  ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} ${styles.flexCenter} flex-col px-4 relative`}>
                <div className="w-full flex flex-col justify-center text-center z-[1]">
                    <h2 className='text-green-400 font-bold xs:text-[48px] text-[40px] w-full'>
                        Services
                    </h2>
                    <p className={`${styles.paragraph} max-w-[90%] mt-5`}>
                    Chez Waldari, notre mission est d'accompagner vers les meilleurs soins de santé en Égypte, offrant également des 
                    réductions sur les billets de voyage pour faciliter l'accès aux traitements médicaux de qualité.
                    </p>
                </div>
            </section>
            </div>
        </div>
    </div>
  )
}

export default AboutUse