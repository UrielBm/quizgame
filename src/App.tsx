import "./App.scss";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ScorePage from "./Pages/ScorePage";
import PlayBoard from "./Pages/PlayBoard";
import ShowScore from "./Pages/ShowScore";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="play" element={<PlayBoard />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="scores" element={<ScorePage />} />
          <Route
            path="show_score"
            element={
              <PrivateRoute>
                <ShowScore />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
