export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get it Touch</p>
                <h2 class="decoration-[#8D562F]">Contáctame</h2>
                <p className="text-lg">Envia un correo para agendar una reunión</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">Nombre</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Apellido</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Correo</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required />
                    </label>
                    <label htmlFor="phone-numer" className="contact--label">
                        <span className="text-md">Teléfono</span>
                        <input type="number" className="contact--input text-md" name="phone-numer" id="phone-numer" required />
                    </label>
                </div>
                <label htmlFor="choode-topic" className="contact--label">
                    <span className="text-md">Selecciona un tema</span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Selecciona...</option>
                        <option>Desarrollo web</option>
                        <option>Pruebas de usabilidad</option>
                        <option>Diseño de intefaces</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Mensaje</span>
                    <textarea
                    className="contact--input text-md"
                    id="message"
                    rows="8"
                    placeholder="Escribe tu mensaje..."
                    />
                </label>
                <label htmlFor="checkbox"
                className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox"/>
                    <span className="text-sm"> Acepto los términos</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Enviar</button>
                </div>
            </form>
        </section>
    )
}