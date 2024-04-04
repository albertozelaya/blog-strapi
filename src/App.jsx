import { Homespage } from "./pages";
import BlogContentPage from "./pages/BlogContentPage";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homespage />}></Route>
        <Route path="/blog/:id" element={<BlogContentPage />}></Route>
      </Routes>
    </div>
  );
}
