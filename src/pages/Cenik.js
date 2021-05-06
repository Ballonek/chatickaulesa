/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

export default function Cenik() {
  useEffect(() => {
    window.scrollTo({ top: 500 });
  }, []);

  return (
    <>
      <div
        css={css`
          padding: 50px 0;
          background-color: #262523;
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2>Rezervace termínu</h2>
      </div>
      <Container
        css={css`
          padding: 50px 0;
          color: black;
          text-align: center;
        `}
      >
        <div>
          <script src='https://obsazenost.e-chalupy.cz/resize.js'></script>
          <iframe
            title='kalendar echalupy'
            src='https://obsazenost.e-chalupy.cz/kalendar.php?id=11823&legenda=ano&jednotky=ano&pocetMesicu=12&velikost=2'
            height='500px'
            width='100%'
            frameBorder='0'
          ></iframe>
        </div>
        <div>
          <div
            css={css`
              padding: 50px 0;
            `}
          >
            <h3>Ceník ubytování/pronájmu</h3>
            <div>Kapacita 1 až 6 osob - 2 ložnice</div>
            <div>
              <b>Letní sezona: 1. června do 5. září</b>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              @media screen and (max-width: 792px) {
                flex-direction: column;
                align-items: center;
                padding: 0 10px;
              }
            `}
          >
            <div
              css={css`
                flex: 2;
                text-align: left;
                @media screen and (max-width: 792px) {
                  padding: 20px 0;
                }
              `}
            >
              <h3>Provoz, poplatky, ceny</h3>
              <div>
                Chatu lze v letní sezóně pronajmout pouze na týden a více dní.
                <br />A to neděle - neděle. (Letní sezóna je od 1.6. - 30.9.)
              </div>
              <br />
              <div>Mimo letní sezónu lze chatu pronajmout přes víkend na min. 2 noci a v týdnu za min. 3 noci</div>
              <div
                css={css`
                  @media screen and (max-width: 792px) {
                    padding: 20px 0;
                  }
                `}
              >
                <table
                  css={css`
                    margin: 50px 0;
                    td {
                      padding-right: 30px;
                    }
                  `}
                >
                  <tbody>
                    <tr>
                      <td>
                        <b>Cena objektu/víkend</b>
                      </td>
                      <td>3 000 Kč/noc (min. 2 noci)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cena objektu/přes týden</b>
                      </td>
                      <td>2 200 Kč/noc (min. 3 noci)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Vratná kauce</b>
                      </td>
                      <td>3 000 Kč</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Poplatek za psa</b>
                      </td>
                      <td>200 Kč/noc</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Poplatek obci</b>
                      </td>
                      <td>20 Kč/noc/osoba</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                css={css`
                  a {
                    font-weight: bold;
                    color: black;
                  }
                `}
              >
                Všeobecné podmínky (storno podmínky) najdete na našich stránkách v sekci <a href='/podminky'>podmínky</a>
              </div>
            </div>
            <div
              css={css`
                flex: 1;
              `}
            >
              <table
                css={css`
                  border: 1px solid black;
                  background-color: rgba(84, 65, 50, 1);
                  th {
                    color: white;
                  }
                  tr,
                  th {
                    padding: 5px 5px;
                  }
                  tr {
                    border-radius: 10px;
                    background-color: white;
                  }
                `}
              >
                <thead>
                  <th>Ceny za týden za celou chatu</th>
                </thead>
                <tbody>
                  <tr>Letní sezona: 15000,-</tr>
                  <tr>Mino sezonu: 13000,-</tr>
                </tbody>
                <thead>
                  <th>Ceny za víkend za celou chatu</th>
                </thead>
                <tbody>
                  <tr>Mino sezonu: 6000,-</tr>
                </tbody>
                <thead>
                  <th>Silvestr - máme ještě volno</th>
                </thead>
                <tbody>
                  <tr>24000,-</tr>
                  <tr>Pobyt od 27.12. - 2.1. (6 nocí)</tr>
                </tbody>
                <thead>
                  <th>Vánoce - máme ještě volno</th>
                </thead>
                <tbody>
                  <tr>12000,-</tr>
                  <tr>Pobyt od 23.12. - 27.12. (4 noci)</tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
