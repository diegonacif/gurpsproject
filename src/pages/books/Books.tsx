import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import './Books.css';
import * as ImgSrc from '../../images'

const Books = () => {
  return (
    <div className="backg-books">
      <h1>Livros</h1>
      <div className="main">
        <div className="row">
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_personagens} alt="Mountains" className="bkimg" />
              </a>
              <div className="booknametwo">
                  Módulo Básico Personagens
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_lowtech} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Low Tech
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_martialarts} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Martial Arts
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_magic} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Magic
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_thaumatology} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Thaumatology
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_fantasy} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Fantasy
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_banestorm} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Banestorm
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_escudodomestre} alt="Mountains" className="bkimg" />
              </a>
              <div className="booknametwo">
                  Escudo do Mestre
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_manobras} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Manobras
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_imbuements} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Imbuements
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="https://mega.nz/file/755m1SSa#VsQjzoejbtXNX9ay-P_kOhPYAxbFDp45UfefVv-u5Ls">
                <img src={ImgSrc.gurps_masscombat} alt="Mountains" className="bkimg" />
              </a>
              <div className="bookname">
                  Mass Combat
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Books