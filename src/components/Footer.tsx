
import { facebook, instagram, twitter } from '../assets'
import { footerLinks} from '../constants';
import styles from '../styles'

const Footer = () =>  (
  <section className={`${styles.flexCenter} ${styles.paddingY} bg-green-300 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full px-6 md:px-16`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <h3 className='text-white font-poppins font-bold text-4xl lg:text-4xl'>Waldari</h3>
        <p className={`font-poppins font-normal text-white text-[16px] leading-[30.8px] mt-4 max-w-[310px]`}>
          Nous avons decider de vous donnez la meilleures services qui soit.
        </p>
        <div className=" flex flex-row mt-7 gap-5 text-white">
          <img src={facebook} alt='facebook' className='w-[24px] h-[24px] rounded-full cursor-pointer text-white' />
          <img src={instagram} alt='instagram' className='w-[24px] h-[24px] rounded-full cursor-pointer' />
          <img src={twitter} alt='twitter' className='w-[24px] h-[24px] rounded-full cursor-pointer' />
        </div>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap text-white md:mt-0 mt-10'>
        {footerLinks.map(footerLink => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-150px'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-4'>
              {footerLink.title}
            </h4>
            <ul className='list-none'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-gray-800 cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>

    <hr className='w-full border-dimWhite my-2' />
    <div className={`${styles.flexCenter} flex-row justify-center md:justify-between text-center md:text-left  w-full px-6 md:px-16`}>
      <p className='text-white text-[14px] font-poppins font-normal'>Copyright © 2024 Waldari.<br className='block sm:hidden' /> Tout droit reservé.</p>
    </div>
  </section>
  )


export default Footer