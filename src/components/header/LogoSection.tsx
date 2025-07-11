import {Link} from "react-router-dom";

const LogoSection = () => {
    return (
        <Link to="/" className="flex items-center justify-center sm:justify-start">
            <img src="/logo1.png" alt="Logo" className="h-12 w-24 sm:h-14 sm:w-16" />
            <p className="hidden sm:inline-block ml-2 text-2xl font-semibold text-teal-600">Learn Hub</p>
        </Link>
    );
};

export default LogoSection;