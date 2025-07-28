import React from 'react'

const Page = () => {
  return (
    <div className="mb-96">
      
      <section className="h-[900px] mb-10">
      <h3 className="text-5xl mt-12 text-center">Our Works</h3>
      <p className="mt-6 text-center text-[20px] text-[#4D4D4D]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, <br />
         delectus odio iure explicabo.
      </p>

      <div className="h-auto grid grid-cols-3 gap-8 mt-10 px-6">
  <div className=" h-[500px] mt-4 overflow-hidden  shadow">
    <img
      src="https://preview.colorlib.com/theme/create/images/img_1.jpg.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className=" h-[500px] mt-4 overflow-hidden  shadow">
    <img
      src="https://preview.colorlib.com/theme/create/images/img_3.jpg.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className=" h-[500px] mt-4 overflow-hidden shadow">
    <img
      src="https://preview.colorlib.com/theme/create/images/img_5.jpg.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className=" h-[500px] mt-4 overflow-hidden shadow">
    <img
      src="https://preview.colorlib.com/theme/create/images/img_4.jpg.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className=" h-[500px] mt-4 overflow-hidden shadow">
    <img
      src="https://preview.colorlib.com/theme/create/images/img_6.jpg.webp"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className=" h-[500px] mt-4 overflow-hidden shadow">
    <img
      src="https://tse4.mm.bing.net/th/id/OIP.2Lc4GSl-lwg8CYo1DzlW1QHaEp?pid=Api&P=0&h=220"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</div>
</section>


    </div>
  )
}

export default Page
