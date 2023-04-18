import TitleContainer from "@/components/TitleContainer"
import data from '@/utils/data';

const ContactSection = () => {
  return (
    <div className={`relative h-full w-full bg-[url('/images/background.jpg')] bg-cover z-0 bg-no-repeat`}>
      <div className="h-screen w-full flex flex-col justify-center items-center px-6">

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
        <TitleContainer title='Contact' description={data.contactSentence}/>

        <div className='w-full max-w-6xl flex flex-col justify-center items-center px-12 bg-white rounded-md md:mt-20 mt-6 py-6 mx-6 md:py-20 md:px-12'>
          
          <div className='w-full'>
            <label className='text-l md:text-2xl font-semibold text-dark'>Nom</label>
            <input placeholder='John Doe' type='name' className='mt-4 py-2 md:py-4 px-6 w-full bg-zinc-200 text-medium text-l md:text-2xl rounded-md' />
          </div>
          
          <div className='w-full mt-6 md:mt-12'>
            <label className='text-l md:text-2xl font-semibold text-dark'>Email</label>
            <input placeholder='john@doe.fr' type='email' className='mt-4 py-2 md:py-4 px-6 w-full bg-zinc-200 text-medium text-l md:text-2xl rounded-md' />
          </div>

          <div className='w-full mt-6 md:mt-12'>
            <label className='text-l md:text-2xl font-semibold text-dark'>Message</label>
            <textarea rows={4} placeholder='...' className='mt-4 py-2 md:py-4 px-6 w-full bg-zinc-200 text-medium text-l md:text-2xl rounded-md' />
          </div>

          <button className="text-l md:text-2xl bg-primary cursor-pointer px-24 py-4 md:py-4 uppercase mt-12 md:mt-24 rounded-md font-bold text-white w-full shadow-xl">
            <a href='#project'>Envoyer</a>
          </button>
        </div>
      </div> 
    </div>
  )
}

export default ContactSection;