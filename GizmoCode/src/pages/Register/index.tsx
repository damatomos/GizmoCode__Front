import React from 'react';
import style from './style.module.scss';
import imgHomemDuvida from './../../assets/imgs/homem_duvida.png';

export default function Register() {
    return (
      <div className={style.login}>
          <div className={style.login__left}>
              <div className={style.login__left__header}>
                  <p className={style.logo}>Marca</p>

                  <h1>Crie uma conta</h1>
              </div>

              <form className={style.login__left__form}>
                  <label>Nome</label>
                  <input/>

                  <label>Email</label>
                  <input/>

                  <label>Senha</label>
                  <input/>

                  <button>Cadastrar</button>

                  <button>Entrar com o Google</button>
              </form>

              <div className={style.login__left__copyright}>
                  <span>GizmoCode | © copyright - 2022</span>
              </div>
          </div>
          <div className={style.login__right}>
              <div className={style.login__right__btn}>
                  <button>Entrar</button>
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