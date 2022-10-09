import React from 'react';
import style from './style.module.scss';
import imgHomemDuvida from './../../assets/imgs/homem_duvida.png';
import {Route, Routes} from "react-router-dom";
import Home from "../Home";

export default function Login() {
    return (
      <div className={style.login}>
          <div className={style.login__left}>
            <h1>Acesse sua Conta</h1>
              <div>
                  <label>Email</label>
                  <input/>

                  <label>Senha</label>
                  <input/>

                  <span>Esqueci minha senha</span>

                  <button>Entrar</button>
              </div>
          </div>
          <div className={style.login__right}>
              <div className={style.login__right__btn}>
                  <button>Cadastrar</button>
              </div>
              <div className={style.login__right__text}>
                  <p>Facilite a busca de um item perdido.</p>
                  <p>Se alguém achar, pode lhe informar!</p>
              </div>
              <img src={imgHomemDuvida} alt="Homem com duvidas"/>
          </div>
      </div>
    );
}