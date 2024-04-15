import { Link } from "react-router-dom";
const Blogs = ({blogs}) => {
  return (
    <div className="w-full pt-24 mb-4">
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
