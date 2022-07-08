import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
    <>
        <div className="Footer-Container">
            <a className="Footer-Icon Footer-Facebook" href="https://www.facebook.com/piyush.kumar.338211/" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
            <a className="Footer-Icon Footer-Insta" href="https://www.instagram.com/_piyush._.kumar_" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
            <a className="Footer-Icon Footer-Github" href="https://github.com/piyush016" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a className="Footer-Icon Footer-Linkedin" href="https://www.linkedin.com/in/piyush016/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
        </div>
    </>
    )
}

export default Footer;