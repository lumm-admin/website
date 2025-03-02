import Footer from '../components/Footer';
import ImageSection from '../components/ImageSection';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <ImageSection
        title='Notre histoire'
        imgSrc='/images/comite.jpg'
        className='first-section'
        reverse
      >
        Fondée le 9 octobre 2023 par 7 étudiants, <strong>LÜMM</strong> est une
        association à but <strong>non lucratif</strong> qui a pour mission de
        rendre la culture <strong>accessible</strong> tout en mettant en lumière
        des artistes <strong>émergents</strong>.{<br />}
        Les <strong>buts</strong> de l’association incluent l’organisation
        d’événements <strong>hyper accessibles</strong> avec des prix très bas
        ou libres, ainsi que le soutien et la mise en lumière des{' '}
        <strong>artistes</strong> dans les domaines de la{' '}
        <strong>musique</strong>, de la <strong>mode</strong> et des{' '}
        <strong>arts visuels</strong>.{<br />}Par ailleurs, elle s’efforce de
        développer et de diffuser une identité{' '}
        <strong>audiovisuelle unique</strong>, contribuant ainsi à enrichir le
        paysage artistique, tout en encourageant la créativité et l’inclusivité.
      </ImageSection>
      <ImageSection
        title='Louis Larcher'
        imgSrc='/images/louis.jpg'
        height='50vh'
      >
        <ul>
          <li>
            / <strong>Co-président</strong> & membre fondateur
          </li>
          <li>
            / Responsable <strong>Communication</strong> et{' '}
            <strong>Visuels</strong>
          </li>
          <li>
            / <strong>VJing</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:louis@lumm.love' className='text-link'>
              louis@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection
        title='Noa Ette'
        imgSrc='/images/noa.jpg'
        height='50vh'
        reverse
      >
        <ul>
          <li>
            / <strong>Co-président</strong> & membre fondateur
          </li>
          <li>
            / Responsable <strong>Son</strong>, <strong>Programmation</strong> &{' '}
            <strong>Location</strong>
          </li>
          <li>
            / <strong>VJing</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:noa@lumm.love' className='text-link'>
              noa@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection
        title='Clara hamousz'
        imgSrc='/images/clara.jpg'
        height='50vh'
      >
        <ul>
          <li>
            / <strong>Secrétaire</strong> & membre fondateur.
          </li>
          <li>
            / Pro de <strong>l’administration</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:clara@lumm.love' className='text-link'>
              clara@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection
        title='Mateo Tiedra'
        imgSrc='/images/mateo.jpg'
        height='50vh'
        reverse
      >
        <ul>
          <li>
            / <strong>Trésorier</strong> & membre fondateur
          </li>
          <li>
            / Responsable <strong>Web</strong>, <strong>Staff</strong> &{' '}
            <strong>Opérations</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:mateo@lumm.love' className='text-link'>
              mateo@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection
        title='Kerem Yazici'
        imgSrc='/images/louis.jpg'
        height='50vh'
      >
        <ul>
          <li>
            / <strong>Membre fondateur</strong>
          </li>
          <li>
            / Responsable <strong>Technique & Électricité</strong> et{' '}
            <strong>Matériel</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:kerem@lumm.love' className='text-link'>
              kerem@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection
        title='Antoine Gautier'
        imgSrc='/images/antoine.jpg'
        height='50vh'
        reverse
      >
        <ul>
          <li>
            / <strong>Membre fondateur</strong>
          </li>
          <li>
            / Responsable <strong>Bar</strong> & <strong>Nourriture</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:antoine@lumm.love' className='text-link'>
              antoine@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <ImageSection title='Kevan Lam' imgSrc='/images/kevan.jpg' height='50vh'>
        <ul>
          <li>
            / <strong>Membre fondateur</strong>
          </li>
          <li>
            / Responsable <strong>Merchandising</strong> &{' '}
            <strong>Sponsoring</strong>
          </li>
          <li>
            /{' '}
            <a href='mailto:kevan@lumm.love' className='text-link'>
              kevan@lumm.love
            </a>
          </li>
        </ul>
      </ImageSection>
      <Footer />
    </>
  );
};

export default About;
