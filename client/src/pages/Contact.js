import React, { useState } from "react";
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail')
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(regex)) {
            mail.style.display = 'none';
            return true
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation = 'none'
            }, 1000)
            return false;
        }
    }

    const returnMessage = (message) => {
        let formMess = document.querySelector('.form-message')

        formMess.innerHTML = message;
        formMess.style.opacity = "1";
        formMess.style.background = "#e3007a";

        document.getElementById('name').classList.add('error')
        document.getElementById('email').classList.add('error')
        document.getElementById('message').classList.add('error')
        setTimeout(() => {
            formMess.style.opacity = '0'
        }, 5000)
    }

    const successMessage = () => {
        let formMess = document.querySelector('.form-message')
        formMess.innerHTML = "Message envoyé  ! Nous vous recontacterons dès que possible";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById('name').classList.remove('error')
        document.getElementById('email').classList.remove('error')
        document.getElementById('message').classList.remove('error')


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && isEmail() && message) {
            sendFeedback("template_kzphnpe", {
                name,
                phone,
                email,
                message,
            });
        } else {
            returnMessage("Merci de remplir correctement les champs requis *")
        }
    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("service_xexguun", templateId, variables)
            .then((res) => {
                successMessage();
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) => {
                    returnMessage("Une erreur s'est produite, veuillez réessayer.")
                }
            )
    };

    return (
        <div>
            <Navigation />
            <h1 className="h1-1"> Nous contacter </h1>
            <form className="contact-form" autoComplete="off">

                <div className="form-content">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom *"
                        value={name}
                        autoComplete="off"
                    />

                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Votre téléphone"
                        value={phone}
                        autoComplete="off"
                    />
                    <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Votre message *"
                        value={message}
                    />
                </div>
                <input
                    className="button-contact"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="form-message"></div>
            </form>
            <br />
            <div className="wrapper-text">
                <p className="p2-1">Neko Association
                Siège social : 31 BD DES POETES HAMEAU DE PETIT-FORT-PHILIPPE 59820 GRAVELINES
                Tèl : 06 50 29 01 43
                Présidente :
                Association à but non lucratif déclarée à la Préfecture du Nord sous le numéro : SIRET 84773048800016 SIREN 847730488
            <p>Envoyez-nous un e-mail à <a href="mailto:gueroute@gmail.com">gueroute@gmail.com</a></p>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;