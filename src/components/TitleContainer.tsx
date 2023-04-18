import me from '../utils/data';

interface TitleContainerProps {
  title: string;
  description?: string;
}

const TitleContainer: React.FC<TitleContainerProps> = ({title, description}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-full max-w-2xl'>
      <h1 className='text-2xl md:text-5xl font-extrabold tracking-wide uppercase text-dark'>{title}</h1>
      <hr className={`w-24 h-1 mx-auto my-4 bg-primary border-0 rounded md:my-10`}/>
      <p className='text-sm md:text-2xl text-medium'>
        {description}
      </p>
    </div>
  )
}

export default TitleContainer;