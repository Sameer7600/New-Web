import React from 'react'

const Page = () => {
  return (
    <div>
      
      <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-semibold text-center mb-16">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <img
            src="https://preview.colorlib.com/theme/create/images/img_1.jpg.webp"
            alt="Create Beautiful Website"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <h2 className="text-lg text-[#32DBC6] mt-6 font-semibold leading-6">
            Create Beautiful Website In Less Than An Hour
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Ham Brook &nbsp;•&nbsp; Jan 18, 2019 &nbsp;•&nbsp;
            <span className="text-[#32DBC6]">News</span>
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat.
          </p>
          <p className="text-[#32DBC6] my-4 text-[18px]">Continue Reading...</p>
        </div>

    
        <div>
          <img
            src="https://preview.colorlib.com/theme/create/images/img_2.jpg.webp"
            alt="Create Beautiful Website"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <h2 className="text-lg text-[#32DBC6] mt-6 font-semibold leading-6">
            Create Beautiful Website In Less Than An Hour
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            James Phelps &nbsp;•&nbsp; Jan 18, 2019 &nbsp;•&nbsp;
            <span className="text-[#32DBC6]">News</span>
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat.
          </p>
          <p className="text-[#32DBC6] my-4 text-[18px]">Continue Reading...</p>
        </div>


        <div>
          <img
            src="https://preview.colorlib.com/theme/create/images/img_1.jpg.webp"
            alt="Create Beautiful Website"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <h2 className="text-lg text-[#32DBC6] mt-6 font-semibold leading-6">
            Create Beautiful Website In Less Than An Hour
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            James Phelps &nbsp;•&nbsp; Jan 18, 2019 &nbsp;•&nbsp;
            <span className="text-[#32DBC6]">News</span>
          </p>
          <p className="text-gray-600 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat.
          </p>
          <p className="text-[#32DBC6] my-4 text-[18px]">Continue Reading...</p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Page
