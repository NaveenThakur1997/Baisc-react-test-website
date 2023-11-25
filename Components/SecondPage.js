const SecondPage = () => {
    return (
      <div className="flex"  >
        {/* Left side (photo) */}
        <div className="w-3/4">
          <img
            src="/page2img.png"
            alt="Photo"
            className="w-full h-auto"
          />
        </div>
  
        {/* Right side (text) */}
        <div className=" w-4/5 p-8">
          <h3 className="text-2xl font-semibold text-red-600 ">About Us</h3>
          <h1 className="text-4xl mt-4">We are professional enterprise dedicated to a project consultancy construction management and structural design.</h1>
          <p className="text-lg mt-4">
          test is an engineering and management consultancy provide service for design and construction supervision prebeed services for National highway authority of India and ministry of surface transport Government of India and private developers/contractors.

          test has worked for a number of public and private lines providing planning environmental engineering serving and pre-bidding construction management services
          </p>
          <button className="bg-red-700 text-white px-6 py-2 rounded-full  my-5 ">
            More Details
          </button>
        </div>
      </div>
    );
  };
  
  export default SecondPage;