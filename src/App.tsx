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
import { MainLayout } from "./components/common";

// 카멜 케이스로 작성 부탁해요
export const pathName = {
  home: "/",
  signUp: "/signUp",
  login: "/login",
  album: "/album",
  recentReview: "/album/recentReview",
  mostReview: "/album/mostReview",
  highestRated: "/album/highestRated",
  musicRecommendationBoard: "/musicRecommendationBoard",
  board: "/board",
} as const;

export type PathType = (typeof pathName)[keyof typeof pathName];

function App() {
  useAxiosInterceptors();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route path={pathName.home} element={<MainPage />} />

          <Route path={pathName.album} element={<AlbumPage />} />
          <Route path={pathName.recentReview} element={<RecentReview />} />
          <Route path={pathName.mostReview} element={<MostReview />} />
          <Route path={pathName.highestRated} element={<HighestRated />} />

          <Route path={`${pathName.album}/:id`} element={<AlbumDetailPage />} />

          <Route path={pathName.musicRecommendationBoard} element={<>음추</>} />
          <Route path={pathName.board} element={<>자유</>} />
        </Route>

        <Route path={pathName.signUp} element={<SignUpPage />} />
        <Route path={pathName.login} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
