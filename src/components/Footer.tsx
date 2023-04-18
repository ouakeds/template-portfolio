import me from '../utils/data'

const Footer = () => {
  return (
    <div className='bg-zinc-900 h-96 w-full flex px-6 md:px-40 py-6 md:py-20 justify-center items-center'>
      <div className='w-full flex flex-col md:flex-row justify-between'>
        <div className='w-full max-w-2xl'>
          <h1 className='text-xl md:text-4xl text-white font-bold tracking-wide mb-4'>{me.user}</h1>
          <p className='mt-2 text-sm md:text-xl text-zinc-200 tracking-wide'>
            {me.tagLine}
          </p>
        </div>
        <div className='w-full max-w-2xl mt-6 md:mt-0'>
          <h1 className='text-xl md:text-4xl text-white font-bold tracking-wide mb-4'>Social</h1>

          <div className='flex'>
            {
              me.socials.map(({href, icon}, key) => {
                return (
                  <div className="px-6 py-4 cursor-pointer hover:bg-primary-200" key={key}>
                    <a href={href} target="_blank">
                      <img className='h-4 w-4 md:w-6 md:h-6  cursor-pointer invert' src={icon} />
                    </a>
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;