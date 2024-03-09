import Footer from "@/components/Footer"
import styles from "@/styles"


const Contact = () => {
    return (
        <div className='bg-white w-full overflow-hidden mt-10'>
          <div className={`bg-white mt-24 md:mt-24 ${styles.paddingX}, ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
    
              <div className='flex flex-row justify-center items-center w-full px-4 mt-12'>
                <h1 className={`px-2 md:w-[70%] font-poppins text-center font-bold text-[28px] md:text-[40px] text-gray-900 w-full`}>
                    Nous sommes là pour vous aider à répondre à vos
                    <span className='text-green-400'> questions </span>
                    <span className='text-green-400'>  demandes de renseignements </span>,
                    <span className='text-green-400'>  ou à vous soutenir </span>
                    dont vous avez besoin
                </h1>
              </div>
            <section className={`flex md:flex-row flex-col ${styles.paddingY} px-4 md:px-0`}>
                <div className={`flex-1 ${styles.flexStart} flex-col md:p-8 p-4 rounded-xl border-gray-200 bg-gray-100`}>
                  <div className='flex flex-col'>
                    <h3 className="font-poppins font-bold text-[24px] md:text-[28px] text-gray-900 w-full">
                      Talk to us
                    </h3>
                    <p className="text-sm text-gray-600 font-poppins font-normal ">
                      We will get back to you immediately
                    </p>
                    <form className='flex flex-col items-start justify-betweeen gap-5 my-4'>
                    <div className="grid gap-6" id="form">
                    <div className="w-full flex gap-3">
                        <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" />
                        <input className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name"/>
                    </div>
                    <div className="grid gap-6 w-full">
                        <input className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email"/>
                        <input className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" />
                    </div>
                    {/* <div className="flex gap-3">
                        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required=""/>
                        <input className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required=""/>
                    </div> */}
                    <button className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Submit</button>
                    </div>
                </form>
                  </div>
                </div>
                <div className={`flex-1 flex items-start flex-col justify-between bg-gray-100 md:py-4 md:px-8 p-4 rounded-xl border-gray-200 md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                    <h3 className="font-poppins font-bold text-[24px] md:text-[28px] text-gray-900 w-full py-4">
                      Here are our Contacts
                    </h3>
                    <div className='flex flex-col gap-5 md:gap-16 md:flex-row'>
                      <div className='flex flex-col gap-1'>
                        <a href='tel://+254745232405' className='text-primary text-[18px] font-semibold font-poppins'>Phone</a>
                        <p className='font-poppins cursor-pointer font-medium text-gray-800 text-[18px]'>(+111) 11111111111</p>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <h4 className='text-primary text-[18px] font-semibold font-poppins'>Email</h4>
                        <a href='mailto:info@cyburst.co.ke' className='font-poppins font-medium text-gray-800 text-[18px]'>info@cWaldari.fr</a>
                      </div>
                    </div>
                    <div className='flex flex-col pt-5'>
                        <h4 className='text-primary text-[18px] font-semibold font-poppins'>Location</h4>
                        <a href='#' className='font-poppins font-medium text-gray-800 text-[18px]'>adress rue ,Egypte</a>
                    </div>
                    {/* <div className='flex flex-col pt-5'>
                        <h4 className='text-primary text-[18px] font-semibold font-poppins'>Connect with us on our socials</h4>
                        <div className='flex flex-row gap-3 py-2'>
                          <a href='https://facebook.com/cyburst_internet'>
                            <img src={blackfacebook} className=' text-black contain w-[80%]' />
                          </a>
                          <a href='https://instagram.com/cyburst_internet'>
                            <img src={blackinstagram} className=' text-black contain w-[80%]' />
                          </a>
                          <a href='https://twitter.com/cyburst_internet'>
                            <img src={blacktwitter} className=' text-black contain w-[80%]' />
                          </a>
                          <a href='https://tiktok.com/cyburst_internet'>
                            <img src={blacktiktok} className=' text-black contain w-[80%]' />
                          </a>
                        </div>
                    </div> */}
                </div>
            </section>
    
            </div>
          </div>
    
           <div className={`${styles.flexStart}`}>
             <div className={`${styles.boxWidth}`}>
               <Footer />
             </div>
           </div>
    
        </div>
      )
}

export default Contact