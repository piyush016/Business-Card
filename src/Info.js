import React from "react";
import "./style.css";
import Piyush from "./Piyush.jpeg"
import { MdEmail } from 'react-icons/md';

const Info = () => {
    return (<>
        <img src={Piyush} className="Info-Photo" alt='Piyush' />
        <div className="Info-Main">
            <div className="Info-Name">Piyush Kumar</div>
            <div className="Info-Job">Frontend Developer</div>
            <a href="https://piyush016.github.io/Portfolio-Website/" target="_blank" rel="noreferrer" className="Info-Web">PIYUSH-WEBSITE</a>
        </div>
        <div className="container">
            <a href="mailto:piyushcool116@gmail.com" className="Info-Email"><MdEmail className="Info-Icon"/><span className="Info-Span">E - MAIL</span></a>
        </div>

    </>
    )
}

export default Info;
