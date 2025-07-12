import {Link} from "react-router-dom";

const LogoSection = () => {
    return (
        <Link to="/" className="flex items-center justify-center sm:justify-start">
            <img src="/logo1.png" alt="Logo" className="h-12 w-16 sm:h-14 sm:w-20" />
        </Link>
    );
};

export default LogoSection;