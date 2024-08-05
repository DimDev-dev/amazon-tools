import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 - Vandevelde Dimitri</p>
      <div>
        <Link>
          <CiMail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
