const LogoSection = () => {
    return (
        <div className="flex items-center justify-center sm:justify-start">
            <img src="/logo1.png" alt="Logo" className="h-12 w-32 sm:h-14 sm:w-16" />
            <p className="hidden sm:inline-block ml-2 text-2xl font-semibold text-teal-600">Learn Hub</p>
        </div>
    );
};

export default LogoSection;