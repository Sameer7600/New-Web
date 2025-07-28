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
        <button className="bg-[#32DBC6] hover:bg-[#28b9a8] text-white px-6 py-3 rounded-lg transition text-lg">
          Watch Video
        </button>
      </div>
    </section>



    <section className=" h-[500px]  w-full">
  <div className="grid grid-cols-3 gap-10 max-w-[1200px] mx-auto mt-10">

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



<section className="h-[800px] mb-10">
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
  );
}
