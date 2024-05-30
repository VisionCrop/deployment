import { Link } from 'react-router-dom';
//import CallToAction from '../Components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';
//<div className='p-3 bg-amber-100 dark:bg-slate-700'>
//<CallToAction />
//</div>
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
    <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to VisionCrop</h1>
    <h6 className='text-1.5xl font-bold lg:text-3xl mt-2 lg:mt-4'><em>Farm Smarter! Grow Better!</em></h6>
    
    <p className='text-md text-gray-500 mt-4 leading-relaxed'>
      Here, you'll find a variety of articles and posts regarding crop management, pest control, soil health,
      and sustainable farming practices. At VisionCrop, we're dedicated to creating a collaborative farming community.
      Connect with fellow farmers and agricultural experts to share experiences, ask questions, and get advice
      to improve your farming practices.
    </p>
    
    <Link
      to='/search'
      className='text-xs sm:text-sm text-teal-500 font-bold hover:underline mt-2'     >
      View all posts
    </Link>
  </div>
  
      
     
      <div className=' max-w-9xl mx-auto p-3 flex flex-col gap-8  py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}

      </div>
      </div>
   
  );
}

