const BlogContent = () => {
  const blogs={
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
    };
  return (
    <div className="w-full pb-10 pt-24 ss:pt-4 md:pt-3 lg:pt-3 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img className="h-56 w-full object-cover" src={blogs.cover} alt="imagenCafe" />
            <h1 className="font-bold text-2xl my-1 pt-5">{blogs.title}</h1>
            <div className="pt-5">
              <p>{blogs.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
