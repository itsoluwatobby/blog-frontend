import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import EditPost from './pages/EditPost';
import Footer from './pages/Footer';
import Missing from './pages/Missing';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';

function App() {

  return (
    <div className='flex justify-center items-center w-full h-full bg-gray-200'>
      <div className="flex flex-col bg-gray-500 min-h-screen max-w-screen nest-hub:w-full md:min-w-[50vw] shadow-lg">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='newPost' element={<NewPost />} />
            <Route path='post/:postID/editPost/:postID' element={<EditPost />} />
            <Route path='post/:postID' element={<SinglePost />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Missing />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
