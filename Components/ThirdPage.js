const ThirdPage = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Left side with background image */}
      <div
        className="w-1/4 mx-20 text-black p-2 "
        style={{
          backgroundImage: 'url("/page3l.png")',
          backgroundSize: '60%',
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <h3 className="text-2xl font-semibold text-black">How Can we help your business</h3>
        <p className="mt-4 text-black">
          test has worked for a number of public and private clients providing planning, environmental, engineering, surveying, and Pre-Bidding, construction management services.
        </p>
      </div>

      {/* Right side with background image */}
      <div
        className="w-3/4 px-24 "
        style={{
          backgroundImage: 'url("/page3r.png")',
          backgroundSize: '100%',
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center',
        }}
      >
        <div className="ml-20 flex flex-wrap">
          {/* Individual Cards */}
          <div className="w-1/2 mb-4  ">
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold">Detailed design Engineering</h4>
              <p className="mt-2">We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>

          <div className=" mb-4 "  >
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold">Project Management</h4>
              <p className="mt-2">We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>

          <div className="w-1/2 mb-4  ">
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold">Authority Engineering</h4>
              <p className="mt-2">We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>

          <div className="w-1/2 mb-4  " >
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold">Independent Engineering</h4>
              <p className="mt-2">We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>

          <div className="w-1/2 mb-4  ">
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold">Pre Tender Engineering</h4>
              <p className="mt-2">We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>

          <div className="w-1/2 mb-4  ">
            <div className="h-74 w-64 bg-white p-4 shadow-md rounded-3xl flex flex-col items-center text-center">
              <img src="/page3card.png" alt="img" />
              <h4 className="text-lg font-semibold my-3">Safety Consultant</h4>
              <p>We present you a proposal and discuss the nitty-gritty like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
