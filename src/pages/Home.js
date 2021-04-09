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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SRLWrapper } from 'simple-react-lightbox';

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
  display: flex;
  & > div {
    margin: 10px;
  }
`;

const featureCss = css`
  flex: 1 1 150px;
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

  @media screen and (max-width: 792px) {
    font-size: 20px;
    svg {
      font-size: 30px;
    }
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
  font-size: 16px;

  h3  {
    font-size: 25px;
  }

  @media screen and (max-width: 792px) {
    h3 {
      font-size: 27px;
      font-weight: bold;
    }
    font-size: 18px;
    padding: 40px 10px;
  }
`;

const textCss = css`
  padding: 0 20px;
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 792,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main css={mainCss}>
      <section css={featuresSectionCss}>
        <Container css={featuresContainerCss}>
          <Container>
            <Row css={featuresWrapperCss}>
              <div css={featureCss}>
                <FontAwesomeIcon icon={faBed} />
                <div>2x Ložnice</div>
              </div>
              <div css={featureCss}>
                <FontAwesomeIcon icon={faShower} />
                <div>Koupelna</div>
              </div>
              <div css={featureCss}>
                <FontAwesomeIcon icon={faToilet} />
                <div>2x WC</div>
              </div>
              <div css={featureCss}>
                <FontAwesomeIcon icon={faWifi} />
                <div>Internet</div>
              </div>
            </Row>
          </Container>
        </Container>
      </section>
      <section>
        <Container
          css={css`
            text-align: center;
            padding: 60px 0;
            @media screen and (max-width: 792px) {
              h2 {
                font-size: 27px;
                font-weight: bold;
              }
              font-size: 18px;
              padding: 40px 10px;
            }
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
            @media screen and (max-width: 792px) {
              flex-direction: column;
            }
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
            @media screen and (max-width: 792px) {
              flex-direction: column-reverse;
            }
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
            @media screen and (max-width: 792px) {
              flex-direction: column;
            }
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
            @media screen and (max-width: 792px) {
              flex-direction: column-reverse;
            }
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
            @media screen and (max-width: 792px) {
              flex-direction: column;
            }
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

          @media screen and (max-width: 792px) {
            min-height: 400px;
          }
        `}
      >
        <Container
          fluid
          css={css`
            width: 90%;
          `}
        >
          <SRLWrapper>
            <Slider {...settings}>
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
            </Slider>
          </SRLWrapper>
        </Container>
      </section>
    </main>
  );
};

export default Home;
