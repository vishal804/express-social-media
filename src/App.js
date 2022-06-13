import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { PrivateRoutes } from "./PrivateRoute";
import { Header } from "./component";
import { FeedPage, ProfilePage, Signin, Signup } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
