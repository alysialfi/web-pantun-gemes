import { useNavigate } from 'react-router-dom';

export default function Home() {
  const leftBoxes = ['🌼', '🌈', '🪼', '🌷'];
  const rightBoxes = ['🩷', '🍫', '🐟', '🌞'];

  const navigate = useNavigate();
  const routeToForm = () => {
    navigate('/form');
  }

  return (  
    <>
      <div className='w-full h-screen flex justify-center '>
        <div className='w-[450px] bg-[#D7D7FB] h-full flex flex-col justify-between overflow-hidden'>
          <div className="h-1/2 flex justify-start items-end w-full -rotate-30 transfor -translate-x-5">
            <div className="flex flex-col gap-2 mr-2">
              {leftBoxes.map((box, index) => (
                <div key={index} className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-4xl">
                  {box}
                </div>
              ))}
            </div>
            <div className="flex justify-between flex-col">
              <div className="w-2/3 m-5">
                <h1 className='text-4xl font-medium leading-12 text-gray-600'>
                  Pantun,
                  Pantun
                  apa yang
                  gemesin?
                </h1>
              </div>
              <div className="flex flex-row gap-2">
              {rightBoxes.map((box, index) => (
                <div key={index} className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-4xl">
                  {box}
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="h-1/2 px-10 pt-36">
            <h2 className='text-lg text-gray-600 text-right'>
              pantu(e)ngin kamu dan <br/> aku hidup bersama 🥰
            </h2>
            <h3 className='text-xl text-gray-600 text-right mt-8'>
              Hibur si dia pake pantun<br/>
              Dijamin klepek-klepek!
            </h3>
            <button onClick={routeToForm} className='w-full flex justify-end mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-600 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}