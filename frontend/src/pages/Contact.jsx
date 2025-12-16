import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

const Contact = () => {
  return (
    <div>

      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      {/* Content */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        {/* Image */}
        <img
          className='w-full md:max-w-[360px]'
          src={assets.contact_image}
          alt="Contact My Vaidya"
        />

        {/* Info */}
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>

          {/* Address with Location Icon */}
          <div className='flex items-start gap-2 text-gray-500'>
            <FiMapPin className='text-blue-600 text-lg mt-1' />
            <p>
              MNNIT Allahabad <br />
              Prayagraj, India - 211004
            </p>
          </div>

          {/* Phone & Email */}
          <div className='flex flex-col gap-3 text-gray-500'>
            <div className='flex items-center gap-2'>
              <FiPhone className='text-blue-600 text-lg' />
              <a
                href='tel:+917000926695'
                className='hover:text-black transition'
              >
                +91 70009 26695
              </a>
            </div>

            <div className='flex items-center gap-2'>
              <FiMail className='text-blue-600 text-lg' />
              <a
                href='mailto:contact.myvaidya@gmail.com'
                className='hover:text-black transition'
              >
                contact.myvaidya@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <p className='font-semibold text-lg text-gray-600'>
            OUR SOCIAL MEDIA HANDLES
          </p>

          <div className='flex gap-4 mt-2'>
            <a
              href='https://twitter.com/myvaidyahealth'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 text-xl hover:text-black transition-all'
            >
              <FaXTwitter />
            </a>

            <a
              href='https://instagram.com/my.vaidya'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 text-xl hover:text-black transition-all'
            >
              <FaInstagram />
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
