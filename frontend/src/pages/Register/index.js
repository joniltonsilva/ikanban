import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="iKanban Logo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude desenvolvedores com suas tarefas do Kanban</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#009688" />
                        Voltar para o login
                    </Link>
                </section>

                <form>
                    <input placeholder="Seu nome" />
                    <input type="email" placeholder="Seu email" />
                    <div className="input-group">
                        <input type="password" placeholder="Sua senha" />
                        <input type="password" placeholder="Repita a senha" />
                    </div>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}
