import { FaLinkedin } from 'react-icons/fa';


export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hola, soy John</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Ingeniero en </span>{" "}
                        <br />
                        Computación
                    </h1>
                    <p className="hero--section--description">
                        Programo por comida 🥩🥩🥩
                        
                    </p>
                </div>
                <div className="hero--section--buttons">
                <a href="https://www.linkedin.com/in/john0livera" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaLinkedin style={{ marginRight: '8px' }} />
                LinkedIn
            </a>
                    <a href="https://drive.google.com/uc?export=download&id=199C__xqx9coo0GXJDZsjOYWJ1txbQjAj" className="btn btn-primary" download>Descargar CV</a>
                </div>

            </div>
            <div className="hero--section--img">
                <img src="./img/hero.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}