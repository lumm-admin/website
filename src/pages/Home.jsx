//import Navbar from '../components/Navbar';
import glitchyLumm from '../assets/videos/anim-logo-home.mp4';
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
        <source src={glitchyLumm} type='video/mp4' />
      </video>
    </div>
  );
};

export default Home;
