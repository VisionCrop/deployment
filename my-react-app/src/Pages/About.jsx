import { FaRegLightbulb, FaHandsHelping, FaExchangeAlt, FaNewspaper, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-screen-xl mx-auto p-3 text-center'>
        <div className="gap-4 flex justify-center">
          <h1 className='text-3xl font-semibold text-center my-7'>
            About VisionCrop
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to VisionCrop, your go-to platform for collaborative farming and knowledge exchange. We aim to connect farmers with agricultural experts to facilitate communication, share experiences, and find solutions to common challenges in agriculture.
            </p>

            <p>
              Our platform allows farmers to share crop images, ask questions, and seek advice from fellow farmers and experts in the field. Whether you're looking to improve crop management techniques, tackle pest control issues, or enhance soil health, VisionCrop is here to support you on your farming journey.
            </p>

            <p>
              Join our community today to farm smarter and grow better. Together, let's cultivate a sustainable future for agriculture.
            </p>

            <div className="gap-4 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-green-200 p-3 shadow-md">
                  <FaRegLightbulb size={30} color={'green'} />
                </div>
                <div className="border border-green-200 rounded-md p-4 shadow-md mt-2">
                  <p className="text-center">Share Your Experiences</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-green-200 p-3 shadow-md">
                  <FaHandsHelping size={30} color={'green'} />
                </div>
                <div className="border border-green-200 rounded-md p-4 shadow-md mt-2">
                  <p className="text-center">Get Expert Advice</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-green-200 p-3 shadow-md">
                  <FaExchangeAlt size={30} color={'green'} />
                </div>
                <div className="border border-green-200 rounded-md p-4 shadow-md mt-2">
                  <p className="text-center">Exchange Knowledge</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-green-200 p-3 shadow-md">
                  <FaNewspaper size={30} color={'green'} />
                </div>
                <div className="border border-green-200 rounded-md p-4 shadow-md mt-2">
                  <p className="text-center">Stay Updated</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-green-200 p-3 shadow-md">
                  <FaUsers size={30} color={'green'} />
                </div>
                <div className="border border-green-200 rounded-md p-4 shadow-md mt-2">
                  <p className="text-center">Connect & Collaborate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
