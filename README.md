# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## 인식
### 로그인
![로그인](https://github.com/user-attachments/assets/020d8916-a430-4310-a9bc-a6b6c8a86604)
사용자가 SingK의 자체 로그인 서비스와 OAuth 2.0으로 구현된 소셜로그인 기능을 통해 로그인을 할 때 편의성을 제공합니다.

<br>

### 앨범 목록
<img width="1512" alt="앨범 게시판 목록" src="https://github.com/user-attachments/assets/9cffe3e3-06bd-4393-8a00-e3a67f84050f">
최근 평가된 앨범, 평가 많은 순, 평점 높은 순으로 구성된 앨범 목록을 통해 다른 사용자들은 어떤 평가를 했는지 볼 수 있고, 요즘 인기가 많은 노래는 무엇인지 트렌드를 알 수 있습니다.

<br>

### 앨범 상세 
<img width="1512" alt="앨범 상세" src="https://github.com/user-attachments/assets/5a1659ca-6eda-42fb-b8a3-3b8736fd272b">
<img width="1512" alt="앨범 상세" src="https://github.com/user-attachments/assets/5a1659ca-6eda-42fb-b8a3-3b8736fd272b">
무한 스크롤로 구현된 앨범 상세 페이지를 통해 더 쉽게 앨범들을 살펴볼 수 있습니다.

<br>

### 음악 추천 게시판 목록
<img width="1512" alt="음악추천게시판목록" src="https://github.com/user-attachments/assets/5ccca02e-a218-4fc1-a5f7-5c42e29e0511">
썸네일에 앨범 표지와 유튜브 썸네일을 보여주어 사용자의 호기심을 자극하고, 다른 사용자에게 음악을 추천해줄 수 있습니다.

<br>


### 자유게시판 목록
<img width="1512" alt="자유게시판목록" src="https://github.com/user-attachments/assets/a7c95182-acee-49f5-8304-d844e29dbaca">
음악이나 앨범 이외에도 자유롭게 이야기를 할 수 있는 공간을 제공합니다.

<br>
