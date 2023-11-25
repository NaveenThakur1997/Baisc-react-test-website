import React from 'react'

const firstpage = () => {
  return (
    <div
      className="bg-cover bg-bottom max-screen"
      style={{
        backgroundImage: 'url("/page1bg1.png")',
        
      }}
      
    >
      <div className='  leading-loose my-9 '>
        <h1 className="text-4xl font-bold text-black my-3 w-1/4 mx-9 "><span className='text-red-800' >We are</span> <span className='text-blue-500' >COMM!TTED</span> <span className='text-red-800' >to managing and</span> <span className='text-blue-500' >CREATING</span>.</h1>
        <h6 className="text-lg text-black mx-10 my-10 w-2/5 ">Manage Your Entire Construction Program, From Concept To Closeout Anf Beyond, With Projectsmates. Manage Your Entire Construction Program, From Concept To Closeout and Beyonod, with out Service</h6>
        <div className="mt-6">
          <button className="bg-red-700 text-white px-6 py-2 rounded-full mx-9 my-14 ">
            Book a demo
          </button>
          <button className="bg-transparent text-blue-600 px-4 py-2 rounded-md">
            Watch video
          </button>
        </div>
      </div>
       {/* Add your small image */}
       <img
        src="/page1bg2.png"
        alt="Small Image"
        className="absolute top-20 right-0 w-500 h-500 mt-12 mr-11"
      />
    </div>
  )
}

export default firstpage