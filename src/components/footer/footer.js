import "./footer.css";
import logo from "../../images/cat.svg";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Subscribe from "./subscribe/subscribe";

const Footer = () => {
  const SocialLinks = (props) => {
    return (
      <a
        className="socialLink"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        {props.img}
      </a>
    );
  };

  return (
    <div className="footer">
      <div className="container row">
        <div className="columnleft">
          <img className="footer-logo" alt="logo" src={logo} />
          <p className="footer-text">
            Some text describing the page, what an awesome page i have to say...
            like oh my goat
          </p>
        </div>
        <div className="columnright">
          <div className="left">
            <p className="title">Overview</p>
            <br />
            <p>Exercisies</p>
            <p>Disciplines</p>
          </div>
          <div className="left">
            <p className="title">Support</p>
            <br />
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>About us</p>
          </div>
          <div className="right">
            <Subscribe />
            <p>Connect with us</p>
            <div>
              <SocialLinks img={<FaFacebookF />} url="https://www.google.com" />
              <SocialLinks img={<FaInstagram />} url="https://www.google.com" />
              <SocialLinks img={<FaTwitter />} url="https://www.google.com" />
              <SocialLinks img={<FaYoutube />} url="https://www.google.com" />
            </div>
          </div>
        </div>
        <div className="columnright">
          <hr />
        </div>
        <div className="columnright">
          <p>All rights reserver</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
