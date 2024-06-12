import { Routes, Route } from "react-router-dom";

import {
  MainPage,
  SignUpPage,
  LoginPage,
  HighestRated,
  MostReview,
  RecentReview,
  AlbumDetailPage,
} from "./components/pages";

import { useAxiosInterceptors } from "./hooks";

import GlobalStyle from "./styles/GlobalStyle";

import AlbumPage from "./components/pages/AlbumPage";

function App() {
  useAxiosInterceptors();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recentreview" element={<RecentReview />} />
        <Route path="/mostreview" element={<MostReview />} />
        <Route path="/highestrated" element={<HighestRated />} />
        <Route path="/album-detail/:id" element={<AlbumDetailPage />} />
        <Route path="/album/*" element={<AlbumPage />} />
      </Routes>
    </>
  );
}

export default App;
