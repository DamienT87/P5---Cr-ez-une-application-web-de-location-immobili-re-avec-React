import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Apropos from "../pages/APropos";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}