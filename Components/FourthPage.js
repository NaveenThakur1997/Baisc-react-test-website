import React from 'react';

const FourthPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Four small divs */}
      <div className="flex justify-around bg-blue-100 rounded-3xl text-center p-2 ">
        <div className="flex-col font-bold items-center">
          <h4>TEAM MEMBERS</h4>
          <div className='flex justify-center my-5 text-3xl '>
            <img src="/MG1.png" alt="icon" className="w-10  mx-2"/>
            <h1>5</h1>
          </div>
          <h4>In-Depth Experience</h4>
        </div>
        <div className="flex-col font-bold items-center">
          <h4>GROWING SCALE</h4>
          <div className='flex justify-center my-5 text-3xl'>
            <img src="/MG2.png" alt="icon" className="w-10  mx-2"/>
            <h1>5</h1>
          </div>
          <h4>Business Daily Growth</h4>
        </div>
        <div className="flex-col font-bold items-center">
          <h4>CLIENTS</h4>
          <div className='flex justify-center my-5 text-3xl'>
            <img src="/MG3.png" alt="icon" className="w-10  mx-2"/>
            <h1>5</h1>
          </div>
          <h4>Clients We Helped</h4>
        </div>
        <div className="flex-col font-bold items-center">
          <h4>Projects</h4>
          <div className='flex justify-center my-5 text-3xl'>
            <img src="/MG4.png" alt="icon" className="w-10  mx-2"/>
            <h1>5</h1>
          </div>
          <h4>No of Projects</h4>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex p-12 mx-32">
        <ul className="flex justify-center space-x-6">
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">All</li>
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">Tender</li>
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">Product</li>
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">Design Service</li>
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">Office</li>
          <li className="hover:text-blue-600 hover:font-bold cursor-pointer">Design Engineering</li>
        </ul>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Card 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card1.png" alt="Card 1" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card2.png" alt="Card 2" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card3.png" alt="Card 3" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card1.png" alt="Card 4" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card2.png" alt="Card 5" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-4 shadow-md rounded-lg text-center cursor-pointer">
          <img src="/card3.png" alt="Card 6" className="w-full h-80 mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Two Lanning of Anooppur to Chechai Road
            starts at existing CH.00+00 of MP-MDR to 10 Km.</h3>
          <h4 className="text-sm text-gray-500 mt-1">Client: Sadbhav Engineering Ltd.</h4>
          <h5 className="text-blue-500 mt-1">Length: 144 km</h5>
        </div>
      </div>

      {/* Button in the center */}
      <div className="flex justify-center items-center p-0">
        <button className="bg-red-700 text-white px-6 py-2 rounded-full">Load More Projects</button>
      </div>
    </div>
  );
};

export default FourthPage;
