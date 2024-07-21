import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTop3 } from "../services/apiCalls/getTop3";

const Hero = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    console.log("Fetching blog");
    const fetchblog = async () => {
      const response = await getTop3();
      console.log("Data from getTOP3: ", response.blogs);
      
      const formattedBlogs = response.blogs.map(blog => {
        const date = new Date(blog.date);
        const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
        return { ...blog, date: formattedDate };
      });

      setBlog(formattedBlogs);
    };

    fetchblog()
  }, []);

  return (
    <>
      {blog.length === 0 && <h1>Loading...</h1>}
      {blog.length > 0 && (
        <div className="flex flex-col items-center mt-20 space-y-6">
          <h1 className="text-[2rem]">
            <span className="text-orange-500">FROKER</span> BLOG
          </h1>
          <h1 className="md:text-[3rem] text-[1rem] text-center">
            Articles covering the most recent
            <br />
            updates and advancements
          </h1>
          <div className="flex xl:flex-row flex-col xl:items-stretch items-center gap-4 xl:mx-60 lg:mx-40 mx-12">
            <Link
              to={`/blog/${blog[0]._id}`}
              className="cursor-pointer flex flex-col xl:w-1/2 space-y-4"
            >
              <img
                src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier"}
                alt={blog[0].title}
                className="rounded-3xl h-72 object-cover"
              />
              <p className="text-orange-500">
                by {blog[0].author} - {blog[0].date}
              </p>
              <div className="font-sans space-y-2">
                <h1 className="text-[1rem] font-medium">
                  Title: {blog[0].title}
                </h1>
                <p className="text-[#667085] text-wrap">
                  {blog[0].introduction}
                </p>
              </div>
              <p className="text-orange-500 font-semibold underline underline-offset-2">
                Read More...
              </p>
            </Link>
            <div className="flex flex-col xl:w-1/2 space-y-4">
              <Link
                to={`/blog/${blog[1]._id}`}
                className="cursor-pointer flex xl:flex-row flex-col items-center xl:h-1/2 xl:space-x-4 xl:space-y-0 space-y-4"
              >
                <img
                  src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier"}
                  alt={blog[1].title}
                  className="rounded-3xl xl:w-1/2 h-full object-cover"
                />
                <div className="w-full flex flex-col font-sans space-y-2">
                  <p className="text-orange-500">
                    by {blog[1].author} - {blog[1].date}
                  </p>
                  <h1 className="text-[1rem] font-medium">
                    Title: {blog[1].title}
                  </h1>
                  <p className="text-[#667085] text-wrap">
                    {blog[1].introduction}
                  </p>
                  <p className="text-orange-500 font-semibold underline underline-offset-2">
                    Read More...
                  </p>
                </div>
              </Link>
              <Link
                to={`/blog/${blog[2]._id}`}
                className="cursor-pointer flex xl:flex-row flex-col items-center xl:h-1/2 xl:space-x-4 xl:space-y-0 space-y-4"
              >
                <img
                  src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier"}
                  alt={blog[2].title}
                  className="rounded-3xl xl:w-1/2 h-full object-cover"
                />
                <div className="w-full flex flex-col font-sans space-y-2">
                  <p className="text-orange-500">
                    by {blog[2].author} - {blog[2].date}
                  </p>
                  <h1 className="text-[1rem] font-medium">
                    Title: {blog[2].title}
                  </h1>
                  <p className="text-[#667085] text-wrap">
                    {blog[2].introduction}
                  </p>
                  <p className="text-orange-500 font-semibold underline underline-offset-2">
                    Read More...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
