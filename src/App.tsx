import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Post from "./routes/Post";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
  );
}

export default App;
