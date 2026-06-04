import { BrowserRouter, routes, route } from "react-router-dom";
import Home from "./frontend/src/pages/public/Shops"

function Approutes(){
    return(
        <BrowserRouter>
            <routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/abc" element={<Shops />} />
            </routes>
        </BrowserRouter>
    )
}