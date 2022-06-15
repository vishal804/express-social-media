import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./component";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "./redux/reducer/postsSlice";
import {
  BookmarkPage,
  FeedPage,
  LandingPage,
  ProfilePage,
  Signin,
  Signup,
} from "./pages";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
