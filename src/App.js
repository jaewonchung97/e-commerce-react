import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index={true} element={<Shop />} />
        <Route path={"checkout"} element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
