import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#333333] text-white h-[600px] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-6 pt-16 grid grid-cols-4 gap-6">
          <div>
            <h3 className="text-[16px] font-bold mb-4">About Us</h3>
            <p className="text-[16px] text-[#737373]">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Neque facere laudantium <br />
              magnam voluptatum autem. Amet aliquid <br />
              nesciunt veritatis aliquam.
            </p>
          </div>
          <div>
            <h3 className="text-[16px] font-bold mb-4">Feature</h3>
            <ul className="space-y-2">
              <li className="text-[#999999] text-[16px]">About Us</li>
              <li className="text-[#999999] text-[16px]">Services</li>
              <li className="text-[#999999] text-[16px]">Testimonials</li>
              <li className="text-[#999999] text-[16px]">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] font-bold mb-4">Follow Us</h3>
            <div className="flex gap-x-4">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe Newsletter</h3>
            <div className="flex p-4">
              <div className="flex rounded-full overflow-hidden border border-gray-400 w-[340px]">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-transparent text-white px-4 py-2 flex-grow outline-none placeholder-gray-400"
                />
                <button className="bg-[#2EE0D3] text-white w-[130px] text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hr line */}
        <div className="flex justify-center mt-10">
          <hr className="w-2/3 border-t border-gray-600" />
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 mb-10">
          <p>
            Copyright ©2025 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
