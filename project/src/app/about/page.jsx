import React from 'react'

const Page = () => {
  return (
    <div>
      
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <div>
        <h2 className="text-[48px] mb-6">About Us</h2>
        <p className="text-gray-600 mb-3 text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet <br />
           incidunt magnam corrupti, odit eos harum quaerat nostrum <br />
           voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis <br />
            voluptate commodi doloribus, nemo dignissimos recusandae.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          
          {/* Box 1 */}
          <div>
            <a className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="font-semibold text-[20px] mb-1">Web & Mobile Specialties</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.
            </p>
            <a href="#" className="text-teal-500 text-sm mt-2 inline-block">Learn More</a>
          </div>

          {/* Box 2 */}
          <div>
            <a className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="font-semibold text-lg mb-1">Intuitive Thinkers</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.
            </p>
            <a href="#" className="text-teal-500 text-sm mt-2 inline-block">Learn More</a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="https://preview.colorlib.com/theme/create/images/about_1.jpg.webp"
          alt="About Us Image"
          width={700}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>

    </div>
  )
}

export default Page
