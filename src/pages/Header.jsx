import { FaScroll } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='bg-blue-300 flex items-center justify-center gap-5 h-[60px] shadow-md small:py-8 small:pr-2 min-lag:h-[80px]'>
      <h1 className='small:p-4 text-center text-2xl shadow-lg px-3 py-1 text-gray-200 sticky top-0 font-mono bg-blue-400 rounded-md'>WENDSPARKLE BLOG POSTS</h1>
      <FaScroll className='right-4 text-gray-600 text-[45px] py-2'/>
    </div>
  );
}

export default Header;
