import { BlogContent, Footer, Navbar, } from "../components";
import PropTypes from "prop-types";

const BlogContentPage = ({blogs}) => {
  // console.log(blogs)
  return (
    <>
      <Navbar />
      <BlogContent blogs={blogs} />
      <Footer />
    </>
  );
};

BlogContent.propTypes = {
  blogs: PropTypes.object,
};

export default BlogContentPage;
