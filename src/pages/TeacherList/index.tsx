import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import whatsappicon from '../../assets/images/icons/whatsapp.svg';


import './style.css'

function TeacherList(){
    return(
        <div className="container" id="page-teacher-list">
          <PageHeader title="Este são os Proffys disponíveis.">
              <form id="search-teachers">
                  <div className="input-block">
                      <label htmlFor="Subject">Materia</label>
                      <input type="text" id="subject"/>
                  </div>
                  <div className="input-block">
                      <label htmlFor="week_day">Dia da semana</label>
                      <input type="text" id="week_day"/>
                  </div>
                  <div className="input-block">
                      <label htmlFor="time">Hora</label>
                      <input type="text" id="time"/>
                  </div>
              </form>
          </PageHeader>

          <main>
              <article className="teacher-item">
                  <header>
                      <img src="https://avatars0.githubusercontent.com/u/35843474?s=460&u=0dfd771f4126a207e22c4e939ae3074870c616a6&v=4" alt="Yuri Martins"/>
                      <div>
                          <strong>Yuri Martins</strong>
                          <span>Fisica</span>
                      </div>
                  </header>

                  <p>Dolor si amet <br></br> Dolor</p>

                  <footer>
                      <p>
                          Preço/hora
                          <strong>R$ 20, 00</strong>
                      </p>
                      <button type="button">
                          <img src={whatsappicon} alt="Contato"/>
                          Entrar em contato
                      </button>
                  </footer>
              </article>
          </main>
        </div>
    )
}

export default TeacherList;