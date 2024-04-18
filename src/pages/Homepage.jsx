import { Blogs, Footer, Navbar } from "../components";

const Homepage = ({blogs}) => {
  

  return (
    <>
      <Navbar />
      <Blogs blogs={blogs} />
      <Footer />
    </>
  );
};

export default Homepage;
