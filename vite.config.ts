import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// 실행 환경 감지 (배포 환경에서는 Vercel의 환경 변수를 사용)
const isProd = process.env.NODE_ENV === "production";

let key: string;
let cert: string;

if (isProd) {
  // 배포 환경에서는 환경 변수를 사용
  key = process.env.LOCALHOST_KEY as string;
  cert = process.env.LOCALHOST_CERT as string;
} else {
  // 개발 환경에서는 파일 시스템에서 직접 읽기
  key = fs.readFileSync(
    path.resolve(__dirname, "cert/localhost-key.pem"),
    "utf8",
  );
  cert = fs.readFileSync(path.resolve(__dirname, "cert/localhost.pem"), "utf8");
}

// 임시 파일 경로 설정 (배포 환경에서는 /tmp 디렉토리 사용)
const tempDir = isProd ? "/tmp" : path.resolve(__dirname, "cert");
const keyPath = path.join(tempDir, "localhost-key.pem");
const certPath = path.join(tempDir, "localhost.pem");

// 임시 파일 생성 (배포 환경일 경우)
if (isProd) {
  fs.writeFileSync(keyPath, key, "utf8");
  fs.writeFileSync(certPath, cert, "utf8");
}

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    port: 5173,
  },
});
