import TitleContainer from "@/components/TitleContainer"
import data from '@/utils/data';

const AboutSection = () => {

  return (
    <div className='w-full flex flex-col px-6 py-12 md:py-20 md:px-20 justify-center items-center'>
      <TitleContainer
        title="À propos"
        description={data.aboutSentence}
      />
      <div className='h-full w-full flex flex-col md:flex-row md:py-20'>
        
        <div className='flex flex-col mt-10 w-full max-w-4xl md:pr-20'>
          <h2 className='text-2xl md:text-4xl font-bold text-left text-dark'>À propos</h2>
          <p className='text-sm md:text-xl mt-4 md:mt-12 text-left text-medium tracking-wide'>
            {data.story}
          </p>
          <a href='#contact'>
            <button className={`text-l md:text-xl bg-primary cursor-pointer px-12 md:px-24 py-2 md:py-6 uppercase mt-12 md:mt-24 rounded-md font-bold text-white md:w-96`}>
              Contact
            </button>
          </a>
        </div>

        <div className='flex flex-col py-10 w-full max-w-4xl'>
          <h2 className='text-2xl md:text-4xl font-bold text-left text-dark'>Compétences</h2>
          <div className='mt-12 flex flex-wrap'>
            {
              data.skills.map((skill, key) => {
                return (
                  <span key={key} className='bg-zinc-200 px-2 py-2 md:px-12 md:py-4 mx-2 my-2 rounded-md w-auto text-l md:text-xl text-medium font-semibold'>
                    {skill}
                  </span>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutSection;