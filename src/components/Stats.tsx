

const Stats = () => {
  return (
<section className={`w-full flex justify-center text-center items-center md:flex-row bg-green-600 text-white sm:mb-20 mb-6 py-6 `}>
    <p className='font-normal xs:text-[20px] text-[16px] text-white uppercase ml-3'>Vous êtes intéressés par nos services? Nos equipes sont á votre disposition</p>
    {/* {stats.map((stat) => (
      <div key={stat.id} className='flex-1 flex justify-center items-center flex-row m-3'>
        <h4 className='font-poppins font-bold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gray-900'>{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3'>{stat.title}</p>
      </div>
    ))} */}
  </section>
  )
}

export default Stats