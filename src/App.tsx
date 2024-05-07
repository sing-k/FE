import { Routes, Route } from "react-router-dom";

import { MainPage } from "./components/pages";

import { useAxiosInterceptors } from "./hooks";

import GlobalStyle from "./styles/GlobalStyle";

import client from "./config/axios";
import { useEffect } from "react";

function App() {
  useAxiosInterceptors();

  /* test start: 테스트 코드 입니다. */
  const testAPI = async () => {
    try {
      const res = await client.get("/api/albums/random?limit=3");
      console.log(res);
    } catch (err) {
      console.log("test API error: ", err);
    }
  };

  useEffect(() => {
    testAPI();
  }, []);
  /* test end */

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
