/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faToilet, faWifi } from '@fortawesome/free-solid-svg-icons';
import outdoorImg from '../images/outdoor.jpg';
import bedroomImg from '../images/bedroom.jpg';
import kitchenImg from '../images/kitchen.jpg';
import livingroomImg from '../images/livingroom.jpg';
import bathroomImg from '../images/bathroom.jpg';
import car1Img from '../images/car1.jpg';
import car2Img from '../images/car2.jpg';
import car3Img from '../images/car3.jpg';
import car4Img from '../images/car4.jpg';
import car5Img from '../images/car5.jpg';
import car6Img from '../images/car6.jpg';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const carouselImages = [
  { src: car1Img },
  { src: car2Img },
  { src: car3Img },
  { src: car4Img },
  { src: car5Img },
  { src: car6Img },
];

const mainCss = css`
  background-color: rgba(84, 65, 50, 1);
`;

const featuresSectionCss = css`
  padding: 50px 0;
  background-color: #262523;
  min-height: 250px;
  display: flex;
`;

const featuresContainerCss = css`
  display: flex;
`;

const featuresWrapperCss = css`
  height: 100%;
`;

const featureCss = css`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 35px;
    margin-bottom: 20px;
  }
  div  {
    margin-bottom: 20px;
  }
`;

const galerySectionCss = css`
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const textWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;

  h3  {
    font-size: 30px;
  }
`;

const textCss = css`
  padding: 0 20px;
`;

const Home = () => {
  return (
    <main css={mainCss}>
      <section css={featuresSectionCss}>
        <Container css={featuresContainerCss}>
          <Container>
            <Row css={featuresWrapperCss}>
              <Col lg={3} sm={6} css={featureCss}>
                <FontAwesomeIcon icon={faBed} />
                <div>2x Ložnice</div>
              </Col>
              <Col lg={3} sm={6} css={featureCss}>
                <FontAwesomeIcon icon={faShower} />
                <div>Koupelna</div>
              </Col>
              <Col lg={3} sm={6} css={featureCss}>
                <FontAwesomeIcon icon={faToilet} />
                <div>2x WC</div>
              </Col>
              <Col lg={3} sm={6} css={featureCss}>
                <FontAwesomeIcon icon={faWifi} />
                <div>Internet</div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <section>
        <Container
          css={css`
            text-align: center;
            padding: 60px 0;
          `}
        >
          <h2>Ubytování v Beskydech</h2>
          <div>
            Chatička u lesa se nachází v obci Janovice Bystré nedaleko Frýdlantu nad Ostravicí a nedaleko Lysé hory v Beskydech.
            Chata k pronajmutí poskytuje ubytování pro 4 až 6 osob ve 2 ložnicích.
          </div>
        </Container>
      </section>
      <section css={galerySectionCss}>
        <Container
          fluid
          css={css`
            display: flex;
          `}
        >
          <div css={textWrapperCss}>
            <h3>Vnější prostory a okolí</h3>
            <div css={textCss}>
              Chatička u lesa se nachází v obci Janovice Bystré nedaleko Frýdlantu nad Ostravicí a nedaleko Lysé hory v Beskydech.
              Chata k pronajmutí poskytuje ubytování pro 4 až 6 osob ve 2 ložnicích.
            </div>
          </div>
          <div
            css={css`
              flex: 1;
            `}
          >
            <img src={outdoorImg} alt='Outdoor' />
          </div>
        </Container>
        <Container
          fluid
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              flex: 1;
            `}
          >
            <img src={bedroomImg} alt='Bedroom' />
          </div>
          <div css={textWrapperCss}>
            <h3>Ložnice</h3>
            <div css={textCss}>
              V první ložnici je manželská postel (180 x 200) a TV. <br /> Ve druhé ložnici je 2x samostatné lůžko (80 x 190) a
              dětská postýlka
            </div>
          </div>
        </Container>
        <Container
          fluid
          css={css`
            display: flex;
          `}
        >
          <div css={textWrapperCss}>
            <h3>Kuchyně</h3>
            <div css={textCss}>
              Je plně vybavená: Lednice, myčka, pračka, indukční deska, mikrovlná trouba, elektrická trouba, kávovar, varná
              konvice, lavice, židle a stůl
            </div>
          </div>
          <div
            css={css`
              flex: 1;
            `}
          >
            <img src={kitchenImg} alt='Kitchen' />
          </div>
        </Container>
        <Container
          fluid
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              flex: 1;
            `}
          >
            <img src={livingroomImg} alt='Livingroom' />
          </div>
          <div css={textWrapperCss}>
            <h3>Obývací pokoj</h3>
            <div css={textCss}>
              V obývacím pokoji je rozkládací sedací souprava (přistýlka 140 x 200), stůl, TV, krb a internet
            </div>
          </div>
        </Container>
        <Container
          fluid
          css={css`
            display: flex;
          `}
        >
          <div css={textWrapperCss}>
            <h3>Sociální zařízení</h3>
            <div css={textCss}>Koupelna (sprchový kout, WC, umyvalo a druhé samostatné WC</div>
          </div>

          <div
            css={css`
              flex: 1;
            `}
          >
            <img src={bathroomImg} alt='Bathroom' />
          </div>
        </Container>
      </section>
      <section
        css={css`
          background-color: #262523;
          min-height: 500px;
          display: flex;
          align-items: center;
        `}
      >
        <Container fluid>
          <Carousel
            slidesPerPage={3}
            slidesPerScroll={1}
            animationSpeed={3000}
            autoPlay={5000}
            stopAutoPlayOnHover
            offset={10}
            itemWidth={400}
            clickToChange
            centered
            infinite
          >
            {carouselImages.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  css={css`
                    width: 100%;
                  `}
                />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>
    </main>
  );
};

export default Home;
