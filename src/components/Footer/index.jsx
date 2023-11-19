import './style.css';
import imgMapa from './img/mapa.png';

export const Footer = () => {
  return (
    <footer>
      <section className="dark">
        <div className="container columns-2">
          <div className="columns">
            <h2>Kontakt</h2>
            <p>
              Hotel Stříbrava
              <br></br>
              Na Kamenné lávce - 12
              <br></br>
              317 24 Libnice nad Stříbravou
            </p>
            <p>
              {' '}
              <a href="mailto:recepce@hotelstribrava.cz">
                recepce@hotelstribrava.cz
              </a>
            </p>
          </div>
          <img src={imgMapa} />
        </div>
      </section>
    </footer>
  );
};
