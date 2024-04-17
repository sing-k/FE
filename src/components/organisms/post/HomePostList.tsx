import React from "react";

import { PostListHeader } from "../../atoms";

type Props = {
  text: string;
};

const HomePostList = (props: Props) => {
  return (
    <div>
      <PostListHeader text={props.text} />
    </div>
  );
};

export default HomePostList;
