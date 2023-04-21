
import data from '@/utils/data';

const HomeSection = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/background.jpg')]  bg-cover z-0 bg-no-repeat ">
      <div className="h-screen w-full flex flex-col justify-center items-center ">

        <div className='absolute top-50 left-0 bg-white shadow-xl px-6 py-6 z-10 flex flex-col hidden md:block'>
          {
            data.socials.map(({href, icon}, key) => {
              return (
                <div className={`px-4 py-4 cursor-pointer hover:bg-primary-light ${key < data.socials.length -1 ? 'border-b border-primary' : ''}` } key={key}>
                  <a href={href} target="_blank">
                    <img className='w-16 h-16 cursor-pointer' src={icon} />
                  </a>
                </div>
              )
            })
          }
        </div>  

        <div className='w-full max-w-6xl flex flex-col justify-center items-center px-12'>
          <h1 className='text-4xl md:text-6xl text-dark font-extrabold text-center tracking-wide uppercase'>
            Bonjour, Je suis {data.user}
          </h1>
          <h1 className='text-xl md:text-4xl text-medium font-regular mt-12 text-center tracking-wide'>
            {data.tagLine}
          </h1>
          <a href='#project'>
            <button className={`text-l md:text-2xl bg-primary cursor-pointer px-24 py-4 md:py-6 uppercase mt-24 rounded-md font-bold text-white`}>
              Projets
            </button>
          </a>
        </div>
      </div> 
    </div>
  )
}

export default HomeSection;