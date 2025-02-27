//import Navbar from '../components/Navbar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='h-screen w-full flex-centered'>
      <Navbar />
      <video
        autoPlay
        loop
        muted
        className='h-full min-w-[600px] w-2/3 object-contain'
      >
        <source src='/public/videos/anim-logo-home.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default Home;
