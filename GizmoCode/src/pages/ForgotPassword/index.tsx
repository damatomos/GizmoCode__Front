import React from 'react';
import style from './style.module.scss';
import imgHomemDuvida from "../../assets/imgs/homem_duvida.png";

export default function Register() {
    return (
        <div className={style.forgot}>
            <div className={style.forgot__header}>
                <p className={style.logo}>Marca</p>
            </div>

            <form className={style.forgot__form}>
                <h1>Esqueci a senha</h1>

                <label>Email</label>
                <input/>

                <button>Confirmar</button>
            </form>

            <div className={style.forgot__copyright}>
                <span>GizmoCode | © copyright - 2022</span>
            </div>
        </div>
    );
}