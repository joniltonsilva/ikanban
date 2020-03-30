import React from 'react'
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import iKanbanImg from '../../assets/images/kanban_img.svg';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="iKanban Logo" />

                <form>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Seu e-mail" />
                    <input placeholder="Sua senha" />

                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#009688" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={iKanbanImg} alt="iKanban App" />
        </div>
    )
}
