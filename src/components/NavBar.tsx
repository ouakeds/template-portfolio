import { useCallback, useState } from 'react'
import me from '../utils/data';

export default function NavBar() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false)
  const links = [
    { label: 'Accueil', href: '#home'},
    { label: 'À Propos', href: '#about'},
    { label: 'Projets', href: '#project'},
    { label: 'Contact', href: '#contact'}
  ]

  const toggleBurgerMenu = useCallback(() => {
    setIsBurgerMenuOpen((isBurgerMenuOpen) => !isBurgerMenuOpen);
  }, [setIsBurgerMenuOpen])

  return (
    <>
      <nav className='w-full h-20 md:h-28 flex justify-between items-center bg-white border-b-1 border-zinc-200 px-6 md:px-40 shadow-xl fixed top-0 left-0 z-40'>
        <div className='flex gap-4 justify-center items-center'>
          <img src={me.logo} className='h-10 w-10 md:h-16 md:w-16 rounded-full'/>
          <h1 className='text-l md:text-2xl font-bold uppercase text-zinc-800'>{me.user}</h1>
        </div>
        <div className='flex  gap-12 justify-center items-center hidden md:flex'>
          {
            links.map(({label, href}, key) => {
              return <a key={key} href={href} className={`text-l md:text-xl font-bold uppercase text-dark hover:text-primary cursor-pointer`}>{label}</a>
            })
          }
          <a href='/documents/cv.pdf' target='_blank'>
            <button className={`text-l md:text-xl font-bold uppercase text-dark hover:text-primary cursor-pointer outline rounded-md px-4 py-2 flex gap-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              CV
            </button>
          </a>

        </div>
        <button className='block md:hidden' onClick={toggleBurgerMenu}>

          {
            isBurgerMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </nav>
      {
        isBurgerMenuOpen && (
          <div className='fixed bg-white border flex flex-col shadow-l w-full top-20 shadow-xl z-40'>
            {
              links.map(({href, label}, key) => {
                return <div key={key} className='border border-b border-t border-l-0 border-r-0 border-zinc-300 w-full py-4 px-20 flex justify-end'>
                  <a href={href} className={`text-l md:text-xl font-bold uppercase text-zinc-700 hover:text-primary-500 cursor-pointer my-4 text-end`}>{label}</a>
                </div>
              })
            }
          </div>
        )
      }
    </>
  )
}
