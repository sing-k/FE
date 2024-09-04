import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import color from "../../styles/color";
import { glassEffectStyle } from "../../styles/style";

import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

import { FaChevronUp } from "react-icons/fa";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import EmptyMessage from "./EmptyMessage";

interface ItemProps {
  [key: string]: any;
}

interface ItemComponentProps extends ItemProps {
  data: any;
}

type Props = {
  queryResult: UseInfiniteQueryResult<InfiniteData<any[], any>>;
  ItemComponent: (props: ItemComponentProps) => React.ReactElement | undefined;
  itemProps?: ItemProps;
  containerStyle?: React.CSSProperties;
  emptyMessage: string;
};

const InfiniteScrollList = ({
  queryResult,
  ItemComponent,
  containerStyle,
  itemProps,
  emptyMessage,
}: Props) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = queryResult;

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { clientHeight, scrollHeight, scrollTop } = scrollRef.current;

    // 스크롤 맨 마지막 도달 endReached
    if (clientHeight + scrollTop >= scrollHeight - 5) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  };

  const onClickScrollUp = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTop = 0;
  };

  useEffect(() => {
    if (scrollRef.current) {
      handleScroll();
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={error.message} />;
  if (!data) return <ErrorMessage message="infite data 없음" />;

  return (
    <Container>
      {data.pages[0].length === 0 ? (
        <EmptyMessage message={emptyMessage} />
      ) : (
        <>
          <ScrollContainer
            ref={scrollRef}
            style={containerStyle ? containerStyle : {}}
          >
            {data?.pages.map((page, idx) => (
              <React.Fragment key={idx}>
                {page.map((itemData, idx) => (
                  <React.Fragment key={idx}>
                    <ItemComponent data={itemData} {...itemProps} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </ScrollContainer>

          {isFetchingNextPage && <Loading />}

          <ScrollUpBtn onClick={onClickScrollUp}>
            <FaChevronUp />
          </ScrollUpBtn>
        </>
      )}
    </Container>
  );
};

export default InfiniteScrollList;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const ScrollContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  border-radius: 5px;
`;

const ScrollUpBtn = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  background-color: ${color.COLOR_MAIN};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  width: 2rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
