import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 541px) and (max-width: 1023px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 540px)",
  });

  return { isPc, isTablet, isMobile };
};

export default useMediaQueries;
