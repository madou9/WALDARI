import Hero from "@/components/Hero"
import styles from "@/styles"


const Home = () => {
  return (
    <div className="bg-white w-full ">
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>
    </div>
  )
}

export default Home