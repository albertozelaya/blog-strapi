const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    },
  ];
  return (
    <div className="w-full py-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden drop-shadow-md">
              <img className="h-56 w-full object-cover" src={blog.cover} alt="" />
              <div className="p-8">
                <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                <p className="text-gray-600 text-lg md:text-base">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
