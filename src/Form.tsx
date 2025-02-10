
export default function Form() {
  return (  
    <>
      <div className='w-full h-screen flex justify-center'>
        <div className='w-[450px] bg-[#D7D7FB] h-full flex justify-center items-center'>
          <div className='w-2/3 flex flex-col justify-center gap-4'>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="to" className="text-gray-700">Nama Doi</label>
              <input name="to" type="text" className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="to" className="text-gray-700">Pantun</label>
              <div className="flex gap-2">
                <button className="w-1/2 border text-gray-700 bg-white border-gray-700 rounded-md px-1.5 py-2">Bikin Sendiri</button>
                <button className="w-1/2 border text-white bg-gray-700 border-gray-200 rounded-md px-1.5 py-2">Bikin Pake AI</button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="to" className="text-gray-700">Bait Pertama</label>
              <input name="to" type="text" className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="to" className="text-gray-700">Bait Kedua</label>
              <input name="to" type="text" className="w-full border text-gray-700 bg-white border-gray-200 rounded-md px-1.5 py-2" />
            </div>
            <div className='flex justify-end mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}