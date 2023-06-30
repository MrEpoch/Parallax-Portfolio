import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">
            <div className="portfolio-footer__social">
                <a href="https://github.com/MrEpoch"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/alexandr-sten%C4%8Duk-0bb563272/"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/sasastencuk/"><InstagramIcon /></a>
            </div>
            <div className="portfolio-footer__container">
                <p className="portfolio-footer__text">© {year} Alexandr Stenčuk</p>
            </div>
        </footer>
    )
}
