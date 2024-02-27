import styles from "@/styles"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { profile } from "@/assets"


const Hero = () =>
  (
    <section id="home" className={`${styles.paddingY} flex flex-col md:flex-row mt-24 md:mt-14 items-center padding`}>

            <div className="flex flex-col flex-1 items-center md:items-start sm:px-16 px-6">
                    {/* premier paragraph */}
                <div className="flex flex-row justify-center items-center w-full">
                    <h1 className="flex-1 font-poppins text-center md:text-left font-bold text-[43px] leading-[75px]">
                        <span className="text-zinc-800 text-[43px] font-semibold tracking-tight">Accompagnement</span>
                        <br />
                        <span className="text-green-400 "> Tout au long</span>
                        <span className="text-zinc-800"> de votre Parcours </span>
                        <span className="text-green-400"> Médical </span>
                    </h1>
                </div>
                {/* deuxieme paragraph */}
                <p className={`${styles.paragraph} max-w-[470px] mt-6 text-center md:text-left `}>
                    Chez Waldari, nous facilitons l'accès aux meilleurs soins de santé en Égypte, 
                    avec des réductions sur les billets de voyage et l'obtention de visas en seulement 3 jours.
                </p>
                <Link to={`/contact`}>
                    <Button className="font-poppins hover:text-green-400 font-semibold uppercase mt-8 rounded-md bg-primary text-white p-4">Contacter Nous</Button>
                </Link>
            </div>
            <motion.div animate={{ y: [0, 25, 25, 0] }}  transition={{ repeat:Infinity, duration: 3 }} id='heroimage' className={`flex-1 flex ${styles.flexCenter} md:my-0 my-14 relative`}>
                <img src={profile} className="w-[100%] h-[100%] md:w-[90%] md:h-[90%] relative" />
            </motion.div>
            
    </section>
  )

export default Hero