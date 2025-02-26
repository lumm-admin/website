//import Navbar from '../components/Navbar';
import glitchyLumm from '../assets/videos/anim-logo-home.mp4';

const Home = () => {
  return (
    <div className='h-screen w-full flex-centered'>
      <video autoPlay loop muted className='h-full w-1/2 object-cover'>
        <source src={glitchyLumm} type='video/mp4' />
      </video>
    </div>
  );
};

export default Home;
