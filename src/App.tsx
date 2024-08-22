import { Routes, Route } from "react-router-dom";

import {
  MainPage,
  SignUpPage,
  LoginPage,
  HighestRated,
  MostReview,
  RecentReview,
  AlbumDetailPage,
  MusicRecommendationBoardPage,
  BoardPage,
  WritePostPage,
  WriteRecommendPostPage,
  MusicRMPostPage,
  FreePostPage,
  Mypage,
  OauthSignUpPage,
  UpdatePostPage,
  UpdateRecommendPostPage,
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
  recentReview: "/album/recent",
  mostReview: "/album/reviewCount",
  highestRated: "/album/averageScore",
  albumDetail: "/album/detail",
  musicRecommendationBoard: "/musicRecommendationBoard",
  board: "/board",
  musicRecommendationPost: "/musicRecommendationBoard/post",
  post: "/board/post",
  updateRecommendPost: "/musicRecommendationBoard/update",
  updatePost: "/board/update",
  myPage: "/myPage",
  editProfile: "/editProfile",
  OauthSignUp: "/oauth/signUp",
} as const;

export type PathType = (typeof pathName)[keyof typeof pathName];

function App() {
  useAxiosInterceptors();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          {/* 홈 페이지 */}
          <Route path={pathName.home} element={<MainPage />} />

          {/* 앨범 목록 관련 페이지 */}
          <Route path={pathName.album} element={<AlbumPage />} />
          <Route path={pathName.recentReview} element={<RecentReview />} />
          <Route path={pathName.mostReview} element={<MostReview />} />
          <Route path={pathName.highestRated} element={<HighestRated />} />

          {/* 앨범 상세 페이지 */}
          <Route
            path={`${pathName.albumDetail}/:id`}
            element={<AlbumDetailPage />}
          />

          {/* 게시글 목록 페이지 */}
          <Route
            path={pathName.musicRecommendationBoard}
            element={<MusicRecommendationBoardPage />}
          />
          <Route path={pathName.board} element={<BoardPage />} />

          {/* 게시글 디테일 페이지 */}
          <Route
            path={`${pathName.musicRecommendationBoard}/:id`}
            element={<MusicRMPostPage />}
          />
          <Route path={`${pathName.board}/:id`} element={<FreePostPage />} />

          {/* 마이페이지 */}
          <Route path={pathName.myPage} element={<Mypage />} />
          <Route
            path={`${pathName.myPage}${pathName.editProfile}`}
            element={<Mypage />}
          />
        </Route>

        {/* 회원가입 및 로그인 페이지 */}
        <Route path={pathName.signUp} element={<SignUpPage />} />
        <Route path={pathName.login} element={<LoginPage />} />
        <Route path={pathName.OauthSignUp} element={<OauthSignUpPage />} />
        <Route path={pathName.post} element={<WritePostPage />} />

        {/* 게시글 작성 및 수정 페이지 */}
        <Route path={`${pathName.post}`} element={<WritePostPage />} />
        <Route
          path={`${pathName.musicRecommendationPost}`}
          element={<WriteRecommendPostPage />}
        />

        <Route
          path={`${pathName.updatePost}/:id`}
          element={<UpdatePostPage />}
        />
        <Route
          path={`${pathName.updateRecommendPost}/:id`}
          element={<UpdateRecommendPostPage />}
        />
      </Routes>
    </>
  );
}

export default App;
