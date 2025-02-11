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
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
      });
  };

  const isFormValid = () => {
    return formData.from && formData.to && formData.bait1 && formData.bait2;
  };

  const handlePantunTypeChange = (type: 'self' | 'ai') => {
    setFormData({
        ...formData,
        pantunType: type,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const { from, to, bait1, bait2 } = formData;
    const redirectUrl = `/pantun?from=${from}&to=${to}&bait1=${bait1}&bait2=${bait2}`;

    setTimeout(() => {
      navigate(redirectUrl);
    }, 3000);
  };

  return (  
    <>
      <div className='w-full h-screen flex justify-center'>
        <div className='w-[450px] bg-[#D7D7FB] h-full flex justify-center items-center'>
          <div className='w-2/3 flex flex-col justify-center'>
            <div className="text-center text-3xl text-gray-700 mb-4">Bikin Pantun</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="from" className="text-gray-700">Nama Kamu</label>
                <input
                  name="from"
                  type="text"
                  value={formData.from}
                  onChange={handleChange}
                  className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="to" className="text-gray-700">Nama Doi</label>
                <input
                  name="to"
                  type="text"
                  value={formData.to}
                  onChange={handleChange}
                  className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="to" className="text-gray-700">Pantun</label>
                <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => handlePantunTypeChange('self')}
                    className={`w-1/2 border ${formData.pantunType === 'self' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} border-gray-700 rounded-md px-1.5 py-2`}
                  >
                    Bikin Sendiri
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePantunTypeChange('ai')}
                    className={`w-1/2 border ${formData.pantunType === 'ai' ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} border-gray-200 rounded-md px-1.5 py-2`}
                  >
                    Bikin Pake AI
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="to" className="text-gray-700">Bait Pertama</label>
                <input
                  name="bait1"
                  type="text"
                  value={formData.bait1}
                  onChange={handleChange}
                  className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="to" className="text-gray-700">Bait Kedua</label>
                <input
                  name="bait2"
                  type="text"
                  value={formData.bait2}
                  onChange={handleChange}
                  className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2"
                />
              </div>
              <div className='flex justify-end mt-4'>
                {
                  isSubmitted ? <img src={loader} alt="form loader" className='w-8 h-8' />
                  :
                  <button type='submit' disabled={!isFormValid()}>
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