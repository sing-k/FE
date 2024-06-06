import { Routes, Route } from "react-router-dom";

import {
  MainPage,
  SignUpPage,
  LoginPage,
  AlbumDetailPage,
} from "./components/pages";

import { useAxiosInterceptors } from "./hooks";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  useAxiosInterceptors();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/album/:id" element={<AlbumDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
