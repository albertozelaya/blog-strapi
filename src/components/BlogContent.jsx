import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const BlogContent = ({blogs}) => {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter(blog => blog.id == id);
    blog = arr[0];
  } else {
    blog={}
  }
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Blog 1",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus consequatur nihil fugiat perspiciatis perferendis, consequuntur magnam accusantium eum esse reprehenderit illo quae odio voluptate omnis delectus iusto libero repudiandae tempora voluptates eligendi maxime! Doloribus neque quam, provident harum saepe perspiciatis aspernatur illo asperiores voluptatem vel blanditiis quos laboriosam commodi nesciunt eaque. Illum dolores suscipit laborum sint incidunt voluptas beatae vitae quae laudantium esse maxime ut expedita assumenda, nihil accusantium explicabo deleniti perferendis possimus quasi harum vero officia sed. Eum dolores laudantium sunt aliquid illo commodi quae aut debitis reiciendis fuga veritatis velit magni adipisci, quis neque sint omnis rerum dolorem animi labore earum. Placeat tempora praesentium similique, quaerat consequatur aperiam eius nemo commodi laborum! Nemo error saepe inventore voluptatem?",
  //     cover: "https://www.banhcafe.hn/_next/image?url=%2Fannouncement-2.webp&w=640&q=75",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos iure inventore.",
  //     authorName: "John Does",
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
  // let blog = blogs.filter(blog => blog.id== id)
  // blog = blog[0]
  return (
    <div className="w-full pb-10 pt-24 ss:pt-4 md:pt-3 lg:pt-3 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1338${blog.attributes.coverImg.data.attributes.url}`}
              alt="imagenCafe"
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
            <div className="pt-5">
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="line-break">{blog.attributes.blogContent}</ReactMarkdown>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div className="">
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={`http://localhost:1338${blog.attributes.authorImg.data.attributes.url}`}
                alt=""
              />
              <h1 className="gont-bold text-2xl text-center text-gray-900 pt-3">{blog.attributes.authorName}</h1>
              <p className="text-center text-gray-900 font-medium">{blog.attributes.authorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
