import React from 'react';
import style from './style.module.scss';
import imgHomemDuvida from './../../assets/imgs/homem_duvida.png';

export default function Login() {
    return (
      <div className={style.login}>
          <div className={style.login__left}>
              <div className={style.login__left__header}>
                  <p className={style.logo}>Marca</p>

                  <h1>Acesse sua Conta</h1>
              </div>

              <form className={style.login__left__form}>
                  <label>Email</label>
                  <input/>

                  <label>Senha</label>
                  <input/>

                  <span>Esqueci minha senha</span>

                  <button>Entrar</button>
              </form>

              <div className={style.login__left__copyright}>
                  <span>GizmoCode | © copyright - 2022</span>
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
              <div className={style.login__right__img}>
                  <img src={imgHomemDuvida} alt="Homem com duvidas"/>
              </div>
          </div>
      </div>
    );
}