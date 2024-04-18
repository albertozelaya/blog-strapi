import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
import rehypeRaw from "rehype-raw";

const BlogContent = ({ blogs }) => {
  // Convert id to string
  const { id } = useParams();
  const blogId = typeof id == "number" ? id.toString() : id;
  const blog = blogs.data.find((blog) => blog.id == blogId);

  const cleanContent = DOMPurify.sanitize(blog?.attributes.blogContent || "");

  return (
    <div className="w-full pt-24 ss:pt-4 md:pt-3 lg:pt-3 bg-[#f9f9f9]">
      <div className="max-w-[1240px] my-4 mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black text-justify">
          <div className="col-span-2">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1338${blog?.attributes.coverImg.data.attributes.url}`}
              alt="imagenCafe"
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog?.attributes.blogTitle}</h1>
            <div className="pt-5">
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="line-break">
                {cleanContent}
              </ReactMarkdown>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px] mt-4 ss:mt-0 sm:ms-4">
            <div className="">
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                src={`http://localhost:1338${blog?.attributes.authorImg.data.attributes.url}`}
                alt=""
              />
              <h1 className="gont-bold text-2xl text-center text-gray-900 pt-3">{blog?.attributes.authorName}</h1>
              <p className="text-center text-gray-900 font-medium">{blog?.attributes.authorDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogContent;
