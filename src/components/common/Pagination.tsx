import styled from "styled-components";
import { useMediaQueries } from "../../hooks";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import color from "../../styles/color";
interface PaginationProps {
  currentPage: number; //현재 페이지
  totalPages: number; // 총 페이지 수
  onPageChange: (page: number) => void; //페이지 클릭 함수
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const { isPc, isTablet } = useMediaQueries();

  const pagesToShow = isPc ? 10 : isTablet ? 8 : 5; // 화면 크기에 따른 버튼 개수
  const startPage = Math.max(
    0,
    Math.floor(currentPage / pagesToShow) * pagesToShow,
  );
  const endPage = Math.min(totalPages, startPage + pagesToShow);
  /*
  startPage ,endPage : 현재 페이지를 기준으로 어떤 페이지 버튼을 보여줄 지
  예를들어 현재 페이지가 3 일때 startPage = 0 , endPage = 10 으로 1~10까지 보여줌 
  */
  const handlePrevGroup = () => {
    if (startPage > 0) {
      onPageChange(startPage - pagesToShow);
    }
  };

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      onPageChange(startPage + pagesToShow);
    }
  };

  return (
    <Container>
      <Button onClick={handlePrevGroup} disabled={startPage === 0}>
        <IoIosArrowBack />
      </Button>
      {Array.from({ length: endPage - startPage }, (_, index) => (
        <Button
          key={startPage + index}
          onClick={() => onPageChange(startPage + index)}
          style={{
            fontWeight: currentPage === startPage + index ? "bold" : "normal",
            color: currentPage === startPage + index ? "white" : "black",
            backgroundColor:
              currentPage === startPage + index
                ? `${color.COLOR_MAIN}`
                : "white",
          }}
        >
          {startPage + index + 1}
        </Button>
      ))}
      <Button onClick={handleNextGroup} disabled={endPage >= totalPages}>
        <IoIosArrowForward />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  margin: 0 4px;
  box-shadow: 1px 1px 1px ${color.COLOR_GRAY_BORDER};
  &:hover {
    cursor: pointer;
  }
`;
