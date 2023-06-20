import React from "react";
import "./errorPage.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';


function ErrorPage() {
    return (
        <div className='errorPage'>
            <Header />
            <div className="errorPage_page">
                <h1 className='errorPage_page_title'>404</h1>
                <p className='errorPage_page_content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='errorPage_page_return' to='/'>Retourner sur la page d'accueil</Link>
            <Footer />
        </div>
    )
}

export default ErrorPage
