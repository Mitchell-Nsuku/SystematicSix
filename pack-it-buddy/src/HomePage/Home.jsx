import React from 'react';
import HomeNav from './HomeNav';
import backtruck from '../assets/BackgroundImg/truck4.jpg';
import Services from './Services';
import WhyMove from './WhyMove';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import ChatBot from 'react-simple-chatbot';
import Footer from './Footer';


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
    < Footer />
      
      <ChatBot 
            steps={steps}
            floating={true}
            botDelay={1000}
          />
    </div>
  );
};

export default Home;
