import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiPhone, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

const Footer = () => {

  // 🔹 Scroll helper (IMPORTANT)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* LEFT */}
        <div>
          <img
            className='mb-5 w-40'
            src={assets.logo}
            alt="My Vaidya logo"
          />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            My Vaidya is a digital healthcare platform that helps patients
            easily find doctors, book appointments, and manage their healthcare
            needs seamlessly. We aim to make quality healthcare accessible,
            reliable, and convenient for everyone.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className="hover:text-black transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-black transition">
                About us
              </Link>
            </li>

            <li>
              <Link to="/privacy" className="hover:text-black transition">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

          <ul className='flex flex-col gap-3 text-gray-600'>
            <li className='flex items-center gap-2'>
              <FiPhone className='text-blue-600 text-lg' />
              <a
                href='tel:+917000926695'
                className='hover:text-black transition'
              >
                +91 70009 26695
              </a>
            </li>

            <li className='flex items-center gap-2'>
              <FiMail className='text-blue-600 text-lg' />
              <a
                href='mailto:contact.myvaidya@gmail.com'
                className='hover:text-black transition'
              >
                contact.myvaidya@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4'>
            <a
              href='https://twitter.com/myvaidyahealth'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 text-xl hover:text-black transition'
            >
              <FaXTwitter />
            </a>

            <a
              href='https://instagram.com/my.vaidya'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 text-xl hover:text-black transition'
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2025 © myvaidya.com – All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
