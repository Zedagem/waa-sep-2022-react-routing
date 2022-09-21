import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import SignupForm from "./components/SignupForm";
export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/products" element={<ProductList/>}/>
      </Routes>
    </div>
  );
}
