import TitleContainer from "@/components/TitleContainer"
import data from '@/utils/data';

const ProjectSection = () => {

  return (
    <div className='w-full flex flex-col py-20 px-20 justify-center items-center'>

      <TitleContainer
        title="Projets"
        description={data.projectSentence}
      />

      {
        data.projects.map(({title, description, image, link}, key) => {
          return (
            <div key={key} className='h-full w-full flex flex-col md:flex-row justify-center items-center py-20 md:px-20'>
              <div className='md:max-w-4xl w-full'>
                <img src={image} className='w-full h-full'/>
              </div>
              <div className='max-w-4xl w-full flex flex-col  justify-center items-center md:justify-start md:items-start'>
                <h2 className='text-2xl mt-6 md:mt-0 md:text-4xl font-bold tracking-wide text-center md:text-left text-dark'>{title}</h2>
                <p className='mt-6 md:mt-12 text-l md:text-2xl tracking-wide text-center md:text-left text-medium'>{description}</p>
                <button className={`text-l md:text-2xl bg-primary cursor-pointer px-6 md:px-24 py-3.5 uppercase mt-12 rounded-md font-bold text-white shadow-xl`}>
                  <a>Détail</a>
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProjectSection;

