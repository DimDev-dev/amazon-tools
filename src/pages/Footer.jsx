import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between p-2 bg-primary text-primary-foreground">
      <p>© 2024 - Vandevelde Dimitri</p>
      <div className="flex justify-center items-center">
        <Link>
          <CiMail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
