import {useParams} from "react-router-dom"
const BlogContent = () => {
  const {id}=useParams()
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
      authorName: "John Doe",
      authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
      authorDesc: "Web Developer",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
      authorName: "John Doe",
      authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
      authorDesc: "Web Developer",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
      cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
      authorName: "John Doe",
      authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
      authorDesc: "Web Developer",
    },
  ];
  let blog = blogs.filter(blog => blog.id== id)
  blog = blog[0]
  return (
    <div className="w-full pb-10 pt-24 ss:pt-4 md:pt-3 lg:pt-3 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2">
            <img className="h-56 w-full object-cover" src={blog.cover} alt="imagenCafe" />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
            <div className="pt-5">
              <p>{blog.desc}</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div className="">
              <img className="p-2 w-32 h-32 rounded-full mx-auto object-cover" src={blog.authorImg} alt="" />
              <h1 className="gont-bold text-2xl text-center text-gray-900 pt-3">{blog.authorName}</h1>
              <p className="text-center text-gray-900 font-medium">{blog.authorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
