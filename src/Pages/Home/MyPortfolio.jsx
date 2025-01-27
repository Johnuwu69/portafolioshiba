import data from "../../data/index.json";
import { FaGithub } from 'react-icons/fa';

export default function MyPortfolio() {
    return <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
            <div className="portfolio--container">
                <p className="sub--title">Proyectos Recientes</p>
                <h2 className="section--heading">Mi Portafolio</h2>
            </div>
            <div>
                <a href="https://github.com/Johnuwu69" target="_blank" rel="noopener noreferrer" className="btn btn-github" >
                    <FaGithub style={{marginRight: '8px'}}/>
                    Github</a>
            </div>
        </div>
        <div className="portfolio--section--container">
    {data?.portfolio.map((item, index) => (
        <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
                <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className="text-md">{item.description}</p>
                </div>
                <a href={item.link} className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
                    Ver en GitHub
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                    >
                        <path
                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                            stroke="currentColor"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    ))}
</div>

    </section>
}