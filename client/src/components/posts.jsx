import React, { useEffect, useState } from 'react'
import { getPosts } from '../services/apiCalls/getPosts'
import { Link } from 'react-router-dom'
const Posts = () => {
  const [pages, setPages] = useState([])
  const [blogs, setBlogs] = useState([])
  const [blogsPerPage, setBlogsPerPage] = useState([])
  const [page, setPage] = useState(1)

  const blogsPerPageCount = 9

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts()
      console.log("Data from getPosts-frontend: ", response)
      setBlogs(response.blogs)

      
      const totalPages = Math.ceil(response.blogs.length / blogsPerPageCount)
      setPages(Array.from({ length: totalPages }, (_, i) => i + 1))
      const sortedBlogs = response.blogs.sort((a, b) => new Date(b.date) - new Date(a.date))
      setBlogs(sortedBlogs)

      const formattedBlogs = response.blogs.map(blog => {
        const date = new Date(blog.date);
        const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
        return { ...blog, date: formattedDate };
      });

      setBlogs(formattedBlogs);
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const startIndex = (page - 1) * blogsPerPageCount
    const endIndex = startIndex + blogsPerPageCount
    setBlogsPerPage(blogs.slice(startIndex, endIndex))
  }, [blogs, page])

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1
    if (newPage > pages.length) newPage = pages.length
    setPage(newPage)
  }

  return (
    <div className='xl:mx-60 lg:mx-40 mx-12 space-y-16'>
      <h1 className='text-[2.25rem] mt-16 mb-8'>Recent Posts</h1>
      <div className='lg:grid grid-rows-3 grid-cols-3 gap-4 flex flex-col lg:space-y-0 space-y-4'>
        {blogsPerPage.length === 0 && <h1>Loading...</h1>}
        {blogsPerPage.length > 0 && blogsPerPage.map((item) => (
          <Link hrefLang="#" to={`/blog/${item._id}`} key={item.id} className='w-full cursor-pointer flex flex-col items-center space-y-4'>
            <img src={"https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/Froker/ytwssb6sxltbqktsoier"} alt={item.title} className='rounded-3xl object-cover h-[40vh] w-full' />
            <div className='w-full flex flex-col font-sans space-y-2'>
              <p className='text-orange-500'>by {item.author} - {item.date}</p>
              <h1 className='text-[1rem] font-medium'>Title: {item.title}</h1>
              <p className='text-[#667085]'>{item.introduction}</p>
              <p className='text-orange-500 font-semibold underline underline-offset-2'>Read More...</p>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-row items-center justify-center space-x-4'>
        <button onClick={() => handlePageChange(page - 1)} className='ring-2 p-4 ring-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-[#EAEAEA] text-black mx-1'>{'<'}</button>
        {pages.length > 0 && pages.map((item) => (
          <button onClick={() => setPage(item)} key={item} className={`ring-2 p-4 ${item === page ? "bg-[#EAEAEA]" : "bg-white"} ring-slate-300 hover:bg-slate-200 w-6 h-6 flex justify-center items-center rounded-full text-black mx-1`}>{item}</button>
        ))}
        <button onClick={() => handlePageChange(page + 1)} className='ring-2 p-4 ring-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-[#EAEAEA] text-black mx-1'>{'>'}</button>
      </div>
    </div>
  )
}

export default Posts
