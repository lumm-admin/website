//import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar over />
      <div className='h-screen w-full flex-centered'>
        <video
          autoPlay
          loop
          muted
          className='h-full min-w-[600px] w-2/3 object-contain'
        >
          <source src='/videos/anim-logo-home.mp4' type='video/mp4' />
        </video>
      </div>
      <Footer />
    </>
  );
};

export default Home;
