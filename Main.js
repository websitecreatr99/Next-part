import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaKaggle, FaLinkedinIn, FaMedium } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'>Kishan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>I am an Data-Scientist</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          The goal is to turn data into information, and information into insight.
          </p>
          <div className='flex items-center justify-between max-w-[340px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/kishan-pahadiya-b25a47219/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/websitecreatr99'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://medium.com/@kishanvir0099'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaMedium />
              </div>
            </a>
            <a
              href='https://www.kaggle.com/kishanpahadiya'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaKaggle />
              </div>
            </a>
    {/*<Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>*/}
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 mx-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;