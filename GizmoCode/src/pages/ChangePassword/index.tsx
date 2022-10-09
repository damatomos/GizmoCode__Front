import React from 'react';
import style from './style.module.scss';
import imgHomemDuvida from "../../assets/imgs/homem_duvida.png";

export default function Register() {
    return (
        <div className={style.change}>
            <div className={style.change__header}>
                <p className={style.logo}>Marca</p>
            </div>

            <form className={style.change__form}>
                <h1>Alterar senha</h1>

                <label>Nova senha</label>
                <input/>

                <label>Confirmar senha</label>
                <input/>

                <button>Confirmar</button>
            </form>

            <div className={style.change__copyright}>
                <span>GizmoCode | © copyright - 2022</span>
            </div>
        </div>
    );
}