import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam consectetur distinctio!",
      coverImg: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
    {
      id: 1,
      title: "Blog1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam consectetur distinctio!",
      coverImg: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
    {
      id: 1,
      title: "Blog1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam consectetur distinctio!",
      coverImg: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
  ];
  return (
    <div className="w-full bg-BG_LIGHT py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">


          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img
              className="h-56 w-full object-cover"
              src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75"
              alt="blogImage"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-1">Blog 1</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt blanditiis facere pariatur ea magnam
                obcaecati earum vitae vero consectetur error, quas consequuntur voluptatem porro unde officia soluta
                delectus debitis odio!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img
              className="h-56 w-full object-cover"
              src="https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75"
              alt="blogImage"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-1">Blog 1</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt blanditiis facere pariatur ea magnam
                obcaecati earum vitae vero consectetur error, quas consequuntur voluptatem porro unde officia soluta
                delectus debitis odio!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
