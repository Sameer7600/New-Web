import React from 'react'

const Page = () => {
  return (
    <div>
        
       <section>
     <h2 className="text-center text-5xl mt-10">Contact Us</h2>

     <div className="flex justify-center gap-10 mt-10 ">
        <div className="h-[700px] w-[600px] mb-16">
  <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Form</h2>
    
           
          <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
  
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div>
      <label className="block text-lg mb-1">First Name</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
    </div>


    <div>
      <label className="block text-lg mb-1">Last Name</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
    </div>


    <div className="md:col-span-2">
      <label className="block text-lg mb-1">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
    </div>


    <div className="md:col-span-2">
      <label className="block text-lg mb-1">Subject</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
    </div>


    <div className="md:col-span-2">
      <label className="block text-lg mb-1">Message</label>
      <textarea
        rows="6"
        placeholder="Write your notes or question here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
      ></textarea>
    </div>


    <div className="md:col-span-2 text-center">
      <button
        type="submit"
        className="bg-teal-500 text-white px-8 py-2 rounded-full hover:bg-teal-600 transition text-xl"
        >
        Submit
      </button>
    </div>
  </form>
</div>


        </div>

        <div className="h-[300px] w-[400px]  bg-white shadow-lg rounded-lg">
            <div className="mx-6 my-6">
            <p className="my-2 text-lg">Address</p>
            <p >203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>

            <div className="mx-6 my-6">
            <p className='my-2 text-lg'>Phone</p>
            <p className="text-teal-500">+1 232 3235 324</p>
            </div>

            <div className="mx-6 my-6">
           <p className="my-2 text-lg">Email Address</p>
           <p className="text-teal-500">youremail@domain.com</p>
            </div>

        </div>

     </div>

     </section>
     </div>
  )
}

export default Page
