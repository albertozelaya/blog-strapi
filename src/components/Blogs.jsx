import React from 'react'

const Blogs = () => {
  return (
    <div className="w-full bg-BG_LIGHT py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img
              className="h-56 w-full object-cover"
              src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs
