import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./component";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./redux/reducer/userSlice";
import { getPosts } from "./redux/reducer/postsSlice";
import {
  BookmarkPage,
  ExplorePage,
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
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
