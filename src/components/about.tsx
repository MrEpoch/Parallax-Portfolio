import MyPhoto from '../assets/newPhote.jpeg'; 
import './about.css';

export default function About() {

    return (
        <section className="portfolio-about">
            <h2 className="portfolio-about-title">About me</h2>
            <div className="portfolio-about-photo__container">
                <img src={MyPhoto} alt="Alex's photo" />
            </div>
            <div className="portfolio-about-text">
                <p>
                    I am full stack developer skilled with react library, react native framework, typescript for frontend and for backend i use node.js and express.js.
                    I love food, gym, reading and learning new computer related stuff.
                </p>
            </div>
        </section>
    )
}
