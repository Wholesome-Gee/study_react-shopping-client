import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProductList from "./routes/ProductList";
import Notice from "./routes/Notice";
import Board from "./routes/Board";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="productList" element={<ProductList />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
