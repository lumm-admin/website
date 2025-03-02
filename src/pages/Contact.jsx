import Footer from '../components/Footer';
import ImageSection from '../components/ImageSection';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <ImageSection
        title='Nous contacter'
        imgSrc='/images/contact.jpg'
        className='first-section'
        reverse
      >
        <ul className='w-full'>
          <li>
            / <strong>Email général : </strong>{' '}
            <a href='mailto:contact@lumm.love' className='text-link'>
              contact@lumm.love
            </a>
          </li>
          <li>
            / <strong>Sponsoring : </strong>{' '}
            <a href='mailto:kevan@lumm.love' className='text-link'>
              kevan@lumm.love
            </a>
          </li>
          <li>
            / <strong>Location : </strong>{' '}
            <a href='mailto:noa@lumm.love' className='text-link'>
              noa@lumm.love
            </a>
          </li>
          <li>
            / <strong>Trésorerie : </strong>{' '}
            <a href='mailto:mateo@lumm.love' className='text-link'>
              mateo@lumm.love
            </a>
          </li>
          <li>
            / <strong>Secrétaire : </strong>{' '}
            <a href='mailto:clara@lumm.love' className='text-link'>
              clara@lumm.love
            </a>
          </li>
          <li>
            <div className='mt-4 ml-5'>
              <p>
                <h3>LÜMM</h3>
                Avenue du Tir-Fédéral 25,
                <br />
                1024 Ecublens, Suisse
              </p>
            </div>
          </li>
        </ul>
      </ImageSection>
      <Footer />
    </>
  );
};

export default Contact;
