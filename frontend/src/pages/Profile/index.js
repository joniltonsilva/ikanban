import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="iKanban Logo" />
                <span>Bem vindo</span>

                <Link className="button" to="/tasks/new">Cadastrar Tarefa</Link>
                <button type="button">
                    <FiLogOut size={18} color="#009688" />
                </button>
            </header>

            <h1>Tarefas cadastradas</h1>
        </div>
    )
}
