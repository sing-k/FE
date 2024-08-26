import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { glassEffectStyle } from "../../styles/style";

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
};

const InfiniteScrollList = ({
  queryResult,
  ItemComponent,
  containerStyle,
  itemProps,
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

  return (
    <Container>
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
    </Container>
  );
};

export default InfiniteScrollList;

const Container = styled.div`
  width: 100%;
`;

const ScrollContainer = styled.div`
  ${glassEffectStyle()}
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  border-radius: 5px;
`;
