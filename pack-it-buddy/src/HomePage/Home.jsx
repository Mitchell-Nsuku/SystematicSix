import React from 'react';
import HomeNav from './HomeNav';
import backtruck from '../assets/BackgroundImg/truck4.jpg';
import Services from './Services';
import WhyMove from './WhyMove';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import ChatBot from 'react-simple-chatbot';


const Home = () => {
// chatbot code

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'What number am I thinking?',
    trigger: '5', // Change this to trigger the next step
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Number 1', trigger: '7' },
      { value: 2, label: 'Number 2', trigger: '6' },
      { value: 3, label: 'Number 3', trigger: '6' },
    ],
  },
  {
    id: '6',
    message: 'Wrong answer, try again.',
    trigger: '5',
  },
  {
    id: '7',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
];

// ends here

  console.log("Image path:", backtruck);

  return (
    <div className='max-w-6xl mx-auto px-4'>
      <div>
        <HomeNav />
      </div>
      <div
        className="relative bg-cover bg-center h-64 w-full"
        style={{ backgroundImage: `url(${backtruck})` }}
      >
        <div className="inset-0 flex flex-col items-center justify-center text-white  h-full">
          <h1 className='mt-10 text-5xl'>
            Local & Long Distance Moving
          </h1>
          <p className='text-white py-10 text-center text-lg'>
            Professional removal services from packing to unpacking
          </p>
          <div className='text-center text-white'>
            <button className='px-4 py-2 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-75'>
              Services
            </button>
            <button className='px-4 py-2 ml-2 bg-black bg-opacity-50 text-white rounded-md hover:bg-opacity-75'>
              About
            </button>
          </div>
        </div>
      </div>
      <Services />
      <div className='py-6'>
        <WhyMove />
      </div>

      <footer className="bg-[#131a4b] text-white py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold text-center py-2">About Us</h3>
            <p className='px-4'>PackItBuddy is gearing up to move South African families with care and expertise, launching soon to make every move a smooth journey.</p>
            <div className="flex justify-center">
              <button className='px-2'>
                <FaFacebook size={25} />
              </button>
              <button className='px-2'>
                <FaXTwitter size={25} />
              </button>
              <button className='px-2'>
                <FaSquareInstagram size={25} />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold py-2">Quick Links</h3>
            <ul className='text-amber-400'>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold py-2">Services</h3>
            <ul className='text-amber-400'>
              <li><a href="#" className="hover:underline">Business Moving</a></li>
              <li><a href="#" className="hover:underline">Office Move</a></li>
              <li><a href="#" className="hover:underline">Long Distance</a></li>
              <li><a href="#" className="hover:underline">Local Move</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold py-2">Contact Us</h3>
            <p>PackItBuddy Headquarters</p>
            <p className='text-slate-600'>138 Van Beek Street</p>
            <p>Ellis Park 2094</p>
            <p className="phone">012-345-6789 / 012-876-5432</p>
            <p className="email">info@packitbuddy.co.za</p>
            <p>Monday – Friday: 7:30 AM – 5:00 PM</p>
            <p>Saturday: 8:00 AM – 11:00 AM</p>
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-5 text-center">
            <p>© 2024 PackitBuddy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <ChatBot 
            steps={steps}
            floating={true}
            botDelay={1000}
          />
    </div>
  );
};

export default Home;
