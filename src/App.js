/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import headerImg from './images/header.jpg';
import headerImg2 from './images/header2.jpg';
import headerImg3 from './images/header3.jpg';
import Home from './pages/Home';
import footerImg from './images/footer.jpg';
import Podminky from './pages/Podminky';
import Cenik from './pages/Cenik';
import { Animate } from 'react-simple-animate';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const headerCss = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 792px) {
    min-height: 60vh;
  }

  #img1 {
    background-image: url(${headerImg});
    position: absolute;
    z-index: 3;
    animation: xfade 15s -0s infinite;
    animation-timing-function: ease-in-out;
  }

  #img2 {
    background-image: url(${headerImg2});
    position: absolute;
    z-index: 2;
    animation: xfade 15s -5s infinite;
    animation-timing-function: ease-in-out;
  }

  #img3 {
    background-image: url(${headerImg3});
    position: absolute;
    z-index: 1;
    animation: xfade 15s -10s infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes xfade {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    53% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const navCss = css`
  position: absolute;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  min-height: 70px;
  z-index: 30;
`;

const containerCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 792px) {
    .closed {
      overflow: hidden;
      padding: 0;
      height: 0;
      top: 0;
      opacity: 0;
    }

    .active {
      height: 100%;
      opacity: 1;
      top: 100%;
      display: flex;
      padding: 0 0 40px 0;
    }
  }
`;

const listCss = css`
  list-style: none;
  display: flex;
  @media screen and (max-width: 792px) {
    background: rgba(255, 255, 255, 0.5);
    transition: all 300ms linear;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    right: 0;
    z-index: 1000;
    li {
      margin: 3px 0;
    }
  }

  li {
    padding: 0 0 0 45px;
    a {
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const togglerCss = css`
  color: black;
  display: none;

  @media screen and (max-width: 792px) {
    cursor: pointer;
    font-size: 25px;
    padding: 10px;
    display: block;
  }
`;

const headingCss = css`
  background-color: rgba(84, 65, 50, 0.9);
  max-width: 300px;
  padding: 60px 60px 60px 0;
  margin: auto 0;
  z-index: 30;
  position: relative;
  &:before {
    position: absolute;
    background-color: rgba(84, 65, 50, 0.9);
    content: '';
    height: 100%;
    width: 400%;
    left: -400%;
    top: 0;
  }

  h1,
  h2 {
    font-size: 55px;
    font-weight: 300;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 792px) {
    margin-top: 50px;
    max-width: 200px;
    padding: 20px 35px 20px 0;
    font-size: 15px;
    h1,
    h2 {
      font-size: 40px;
    }
  }
`;

const headingTextCss = css`
  font-size: 60px;
`;

const footerCss = css`
  min-height: 600px;
  background-image: url(${footerImg});
  background-size: cover;
  background-position: bottom;
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 792px) {
    min-height: 350px;
    font-size: 15px;
  }
`;

const imgBox = css`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
`;

const iconWrapperCss = css`
  font-size: 35px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  @media screen and (max-width: 792px) {
    font-size: 20px;
  }
`;

const App = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const isAnimate = useRef(false);
  useEffect(() => {
    isAnimate.current = true;
  }, []);

  return (
    <Router>
      <div className='App'>
        <nav css={navCss}>
          <Container css={containerCss}>
            <div css={togglerCss} onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <ul css={listCss} className={menuToggle ? 'active' : 'closed'}>
              <li>
                <Link to='/'>Domů</Link>
              </li>
              <li>
                <Link to='/podminky'>Všeobecné podmínky</Link>
              </li>
              <li>
                <Link to='/cenik'>Obsazenost/ceník</Link>
              </li>
            </ul>
          </Container>
        </nav>
        <header css={headerCss}>
          <Container>
            <div css={headingCss}>
              <h1>Chatička u lesa</h1>
            </div>
          </Container>
          <div css={imgBox} id='img1'></div>
          <div css={imgBox} id='img2'></div>
          <div css={imgBox} id='img3'></div>
        </header>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/podminky' exact>
            <Podminky />
          </Route>
          <Route path='/cenik' exact>
            <Cenik />
          </Route>
        </Switch>
      </div>
      <footer css={footerCss}>
        <Container
          css={css`
            display: flex;
          `}
        >
          <div css={headingCss}>
            <h2 css={headingTextCss}>Kontakt</h2>
            <div
              css={css`
                margin-bottom: 20px;
              `}
            >
              Frýdlant nad Ostravicí <br />
              Janovice Bystré
              <br />
              Lubno ev. č. 0145
            </div>
            <div>
              +420 736 139 875
              <br />
              chatickaulesa@gmail.com
            </div>
            <div css={iconWrapperCss}>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </Container>
      </footer>
    </Router>
  );
};

export default App;
