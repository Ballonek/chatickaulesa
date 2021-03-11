/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import headerImg from './images/header.jpg';
import Home from './pages/Home';
import footerImg from './images/footer.jpg';
import Podminky from './pages/Podminky';
import Cenik from './pages/Cenik';

const headerCss = css`
  background-image: url(${headerImg});
  min-height: 100vh;
  background-size: cover;
  display: flex;
`;

const navCss = css`
  position: absolute;
  width: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  min-height: 70px;
`;

const containerCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const listCss = css`
  list-style: none;
  display: flex;

  li {
    padding: 0 0 0 22px;
    a {
      color: #000000;
      font-size: 20px;
      font-weight: 500;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const headingCss = css`
  background-color: rgba(84, 65, 50, 0.9);
  max-width: 600px;
  padding: 60px 150px;
  margin: auto 0;
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
`;

const App = () => {
  return (
    <Router>
      <div className='App'>
        <nav css={navCss}>
          <Container fluid css={containerCss}>
            <ul css={listCss}>
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
          <div css={headingCss}>
            <h1 css={headingTextCss}>
              Chatička
              <br /> u Lesa
            </h1>
          </div>
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
        <div css={headingCss}>
          <h2 css={headingTextCss}>Kontakt</h2>
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            Frýdlant nad Ostravicí <br />
            Janovice Vystré
            <br />
            Lubno ev. č. 0145
          </div>
          <div>
            +420 736 139 875
            <br />
            chatickaulesa@gmail.com
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
