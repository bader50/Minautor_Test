import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/home/HomePage";
import Post from "../pages/post/PostPage";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
