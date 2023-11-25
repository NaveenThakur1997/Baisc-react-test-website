import React from 'react';

const FifthPage = () => {
  return (
    <div className="text-center mt-[100vh]">
      <h1 className="text-4xl font-bold mt-8">Testimonials</h1>
      <h2 className="text-2xl mt-4">What Customers Say About Us</h2>
      <div className="flex justify-center mt-8">
        {/* Customer 1 */}
        <div className="w-1/4 mx-2">
          <img src="/Group 35.png" alt="Customer 1" className="w-full h-48 object-cover" />
        </div>
        {/* Customer 2 */}
        <div className="w-1/4 mx-2">
          <img src="/Group 34.png" alt="Customer 2" className="w-full h-48 object-cover" />
        </div>
        {/* Customer 3 */}
        <div className="w-1/4 mx-2">
          <img src="/Group 35.png" alt="Customer 3" className="w-full h-48 object-cover" />
        </div>
      </div>
      <div className="ml-10 mx-5">
          <img src="/Companies.png" alt="Customer 3" className="w-full h-48 object-cover" />
        </div>

        <div className="w-11/12 m-auto p-5 mt-5 text-white " style={{ backgroundImage: 'url(/2626.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className='text-3xl font-bold m-5' >Get in Touch WithUs</h1>
          <p>If you are interested in learning more about what we do, be sure to contact us today! We would love to help you take your business to the next level.If you are 
          interested in learning more about what we do, be sure to contact us today! We would love to help you take your business to the next level.
          </p>
        </div>

    </div>
  );
};

export default FifthPage;