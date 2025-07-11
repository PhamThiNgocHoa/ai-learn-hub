// routes.tsx

import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import HeartedProduct from "./pages/HeartedProduct.tsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/hearted-products" element={<HeartedProduct/>}/>
        </Routes>
    )
}
export default Router;