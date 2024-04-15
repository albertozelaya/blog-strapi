import { Link } from "react-router-dom";
const Blogs = ({blogs}) => {
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
  //     cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
  //     authorName: "John Doe",
  //     authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
  //     authorDesc: "Web Developer",
  //   },
  //   {
  //     id: 2,
  //     title: "Blog 2",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
  //     cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
  //     authorName: "John Doe",
  //     authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
  //     authorDesc: "Web Developer",
  //   },
  //   {
  //     id: 3,
  //     title: "Blog 3",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae",
  //     cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
  //     authorName: "John Doe",
  //     authorImg: "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg",
  //     authorDesc: "Web Developer",
  //   },
  // ];
  return (
    <div className="w-full py-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogs.data.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div key={blog.id} className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img
                  className="h-56 w-full object-cover"
                  src={`http://localhost:1338${blog.attributes.coverImg.data.attributes.url}`}
                  alt=""
                />
                <div className="p-8">
                  <h3 className="font-bold text-2xl my-1">{blog.attributes.blogTitle}</h3>
                  <p className="text-gray-600 text-lg md:text-base">{blog.attributes.blogDesc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
