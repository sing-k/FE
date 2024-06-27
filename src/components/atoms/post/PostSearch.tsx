// import styled from "styled-components";

// const PostSearch = () => {
//   const selectName = "job"; // This is the name attribute for the select element
//   const options = [
//     { value: "선택", label: "선택" },
//     { value: "제목", label: "제목" },
//     { value: "댓글", label: "댓글" },
//     { value: "내용", label: "내용" },
//     { value: "작성자", label: "작성자" },
//   ];

//   return (
//     <Container>
//       <StyledSelect name={selectName}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </StyledSelect>
//     </Container>
//   );
// };

// export default PostSearch;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const StyledSelect = styled.select`
//   font-size: 1rem;
//   font-weight: 700;
//   color: black;
//   margin: 0.5rem;

//   border-radius: 1rem;
//   text-align: center;
//   background-color: white;
//   border: 1px solid white; /* Inner border */
//   position: relative;
//   padding-right: 0rem;
//   padding-left: 0.8rem;
//   padding-top: 0.4rem;
//   padding-bottom: 0.3rem;
//   margin-left: 0rem;
//   margin-right: 0rem;
//   margin-bottom: 1rem;
//   text-align: left;

//   /* Create double border effect with transparent gap */
//   box-shadow:
//     0 0 0 4px #dac5ec,
//     0 0 0 5px white;

//   &:focus {
//     outline: none;
//     text-align: left;
//   }
// `;
