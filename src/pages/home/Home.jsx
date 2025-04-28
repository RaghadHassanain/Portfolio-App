import LineImage from '../../assets/Line.png';
import RPImage from '../../assets/RProfile.jpg';

function Home() {
  return (
    <div className="home-wrapper">
      <section className="home">
        <div className="home-content">
        <img src={RPImage} alt="Raghad-Portfolio" className="RP-image" />
          <h1 className="logo">Welcome To Raghad's Portfolio</h1>
          <h3 className="logo2">A passionate developer eager to build amazing web experiences</h3>
        </div>
      </section>

      
      <img src={LineImage} alt="Decorative Line" className="line-image" />
    </div>
  );
}

export default Home;
