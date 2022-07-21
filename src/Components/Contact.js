import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-b from-stone-800 to-neutral-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div  className='pb-8'>
                <p className='text-4xl font-bold  border-gray-500 inline'>Contact</p>
                <p className='py-6'>Submit the form below to connect with me</p>
            </div>

            <div className='flex justify-center items-center '>
                <form action='https://getform.io/f/365e1fe3-9549-4e4c-ad88-55393c8dad86' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none' />
                    <input type="text" name="email" placeholder="Enter your email" className='my-4 p-2 bg-transparent border-2 rounded-lg text-white focus:outline-none' />
                    <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 h-44 rounded-lg text-white focus:outline-none'></textarea>
                    
                    <button className=' text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-lg bg-gradient-to-r
            from-red-800 to-rose-900 cursor-pointer hover:scale-110 duration-300'>Let's Connect</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
