import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='mt-10 text-3xl font-semibold text-center text-blue-500 md:text-5xl'>Bank Account Details</h1>
      <div className='mt-20 md:flex justify-evenly'>
          <div className='flex flex-col justify-center '>
            <h1 className='text-xl text-gray-500 md:text-2xl'>
                <span className='text-2xl text-black md:text-3xl'>Bank Name</span>- HDFC Bank
            </h1>
            <h1 className='mt-5 text-xl text-gray-500 md:text-2xl'>
                <span className='text-2xl text-black md:text-3xl'>Account Holder Name</span>- Saksham Shrotriya
            </h1>
            <h1 className='mt-5 text-xl text-gray-500 md:text-2xl'>
                <span className='text-2xl text-black md:text-3xl'>Account Number</span>- 50100311315845
            </h1>
            <h1 className='mt-5 mb-5 text-xl text-gray-500 md:text-2xl'>
                <span className='text-2xl text-black md:text-3xl'>IFSC Code</span>- HDFC0001781
            </h1>
            <h1 className='mt-5 mb-20 text-xl text-gray-500 md:text-2xl'>
                <span className='text-2xl text-black md:text-3xl'>UPI-ID</span>- sakshamshrotriyahcc@ybl
            </h1>
          </div>
          <div>
            <h1 className='relative mb-5 text-3xl font-semibold text-blue-700 left-25'>QR Transfer</h1>
            <img src="/images/QR.jpg" alt="" className='w-40 m-20 md:w-80' />
          </div>
      </div>
    </div>
  )
}

export default page

