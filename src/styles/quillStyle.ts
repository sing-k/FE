export const colorList = [
  "#000000",
  "#333333",
  "#666666",
  "#DDDDDD",
  "#ffffff",
  "#EE2323",
  "#F89009",
  "#F3C000",
  "#409D00",
  "#006DD7",
  "#8A3DB6",
  "#7E98B1",
  "#FFC1C8",
  "#FFC9AF",
  "#F6E199",
  "#A6BC00",
  "#99CEFA",
  "#C1BEF9",
  "#C0D1E7",
];

export const modules = {
  toolbar: [
    // 제목 태그 서식 설정
    [{ header: [1, 2, 3, false] }],
    // 글자 스타일 설정
    ["bold", "italic", "underline", "strike", "blockquote"],
    // 글씨 크기
    [{ size: [] }],
    // 텍스트 정렬
    [{ align: ["right", "center", "justify"] }],
    // 순서 있는 리스트 & 순서 없는 리스트
    [{ list: "ordered" }, { list: "bullet" }],
    // 링크와 이미지 삽입 버튼
    ["link", "image"],
    // 텍스트 색상과 배경 색상
    [{ color: colorList }],
    [{ background: colorList }],
    // 텍스트 서식을 제거하는 버튼
    ["clean"],
  ],
};

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "size",
  "align",
  "list",
  "bullet",
  "link",
  "image",
  "color",
  "background",
  "clean",
];
