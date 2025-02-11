import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from './assets/loader.gif';

export default function Form() {
  interface PantunFormData {
    from: string;
    to: string;
    pantunType: 'self' | 'ai';
    bait1: string;
    bait2: string;
  }

  const [formData, setFormData] = useState<PantunFormData>({
    from: '',
    to: '',
    pantunType: 'self',
    bait1: '',
    bait2: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  };

  const isFormValid = () => {
  };

  const handlePantunTypeChange = (type: 'self' | 'ai') => {
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  };

  return (  
    <>
      <div className='w-full h-screen flex justify-center'>
        <div className='w-[450px] bg-[#D7D7FB] h-full flex justify-center items-center'>
          <div className='w-2/3 flex flex-col justify-center'>
            <div className="text-center text-3xl text-gray-700 mb-4">Bikin Pantun</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              // TODO: CREATE FORM
              <div className='flex justify-end mt-4'>
                // TODO: COMPLETE BUTTON LOGIC
                {
                  isSubmitted ? <img src={loader} alt="form loader" className='w-8 h-8' />
                  :
                  <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}