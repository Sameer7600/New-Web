import { Check } from "lucide-react";

export default function Home() {
  return (
   <div>

<section
      className="h-[600px] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/office-desk-table-with-laptop-computer_861973-1442.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">We Love To Build Web Apps|</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
        Free Web Template by  <a className="text-[#32DBC6]">Colorlib</a>
        </p>
        <button className="bg-[#32DBC6] hover:bg-[#28b9a8] text-white px-6 py-3 rounded-lg transition">
          Watch Video
        </button>
      </div>
    </section>

    <section className=" h-[500px]  w-full">
  <div className="grid grid-cols-3 gap-10 max-w-[1200px] mx-auto mt-20">

    <div className="h-[500px]">
    <h3 className="text-[#32DBC6] text-3xl mt-2">Innovate</h3> 
    <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>   
    <ul>
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a>  Customer Experience</li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a>  Product Management</li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a>  Proof of Concept</li>  
      </ul>  
    </div>

    <div className="h-[500px]">
    <h3 className="text-[#32DBC6] text-3xl mt-2">Create</h3>
    <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
    <ul>
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a>  Web Design</li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a> Branding</li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a>  Web & App Development</li>  
      </ul> 
    </div>

    <div className="h-[500px]">
    <h3 className="text-[#32DBC6] text-3xl mt-2">Scale</h3>
    <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
    <ul>
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a> Social Media </li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a> Paid Campaigns </li>  
        <li className="flex mt-3"><a className="text-[#32DBC6] mr-4"><Check /></a> Marketing & SEO </li>  
      </ul> 
    </div>

  </div>
</section>


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


<div className="min-h-screen flex items-center justify-center mt-[300px]">
  <section className="h-[500px] w-[90%] px-6">
    <div className="h-full w-full grid grid-cols-2 gap-8">
      {/* Left Side Image */}
      <div className="h-full overflow-hidden rounded-lg shadow">
        <img
          src="https://preview.colorlib.com/theme/create/images/about_1.jpg.webp"
          alt="Side Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side 2x2 Grid Boxes */}
      <div className="grid grid-cols-2 gap-4">
  <div className="border border-black rounded-lg bg-black text-white p-4 min-h-[230px]">
    <h4 className="text-2xl mb-2">Strategy</h4>
    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet <br />
      consectetur adipisicing elit. <br />
      Cumque ab nihil quam nesciunt
    </p>
    <u className="text-white">Read more</u>
  </div>

  <div className="border border-black rounded-lg bg-black text-white p-4 min-h-[230px]">
    <h4 className="text-2xl mb-2">Strategy</h4>
    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet <br />
      consectetur adipisicing elit. <br />
      Cumque ab nihil quam nesciunt
    </p>
    <u className="text-white">Read more</u>
  </div>

  <div className="border border-black rounded-lg bg-black text-white p-4 min-h-[230px]">
    <h4 className="text-2xl mb-2">Strategy</h4>
    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet <br />
      consectetur adipisicing elit. <br />
      Cumque ab nihil quam nesciunt
    </p>
    <u className="text-white">Read more</u>
  </div>

  <div className="border border-black rounded-lg bg-black text-white p-4 min-h-[230px]">
    <h4 className="text-2xl mb-2">Strategy</h4>
    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet <br />
      consectetur adipisicing elit. <br />
      Cumque ab nihil quam nesciunt
    </p>
    <u className="text-white">Read more</u>
  </div>
</div>
</div>
  </section>
</div>

<section className="max-w-6xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

  <div className="grid grid-cols-3 gap-6">
    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>

    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>

    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>

    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>

    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>

    <div className="h-[200px] w-full rounded-lg flex flex-col items-center justify-center text-center bg-gray-100">
      <h4 className="mb-2 text-[20px] font-semibold">Strategy</h4>
      <p className="mb-4 text-[16px]">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Cumque ab nihil quam nesciunt
      </p>
      <u className="text-[#32DBC6] text-[16px]">Read more</u>
    </div>
  </div>
</section>





   </div> 
  );
}
