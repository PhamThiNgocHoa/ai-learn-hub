import {Link} from "react-router-dom";

const FavoriteIcon = () => (
    <Link to="/hearted-products" className="">
        <i className="far fa-heart text-teal-600 text-3xl cursor-pointer transition"></i>
    </Link>
);

export default FavoriteIcon;
