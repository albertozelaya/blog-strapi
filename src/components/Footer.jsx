const Footer = () => {
  return (
    <div className="w-full bg-RED_DARKER text-gray-200 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="">
          <h6 className="font-bold uppercase py-2">Solutions</h6>
          <ol>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
          </ol>
        </div>
        <div className="">
          <h6 className="font-bold uppercase py-2">Solutions</h6>
          <ol>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
          </ol>
        </div>
        <div className="">
          <h6 className="font-bold uppercase py-2">Solutions</h6>
          <ol>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
          </ol>
        </div>
        <div className="">
          <h6 className="font-bold uppercase py-2">Solutions</h6>
          <ol>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
            <li className="py-1">Marketring</li>
          </ol>
        </div>
        <div className="col-span-2 pt-2 md:pt-2">
          <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
          <p className="py-4">The latest news, artiicles and resources sent to your inbox weekly</p>
        </div>
        <form className="flex flex-col sm:flex-row ">
          <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter email"/>
          <button className="p-2 mb-2 bg-[#00B86E]">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
