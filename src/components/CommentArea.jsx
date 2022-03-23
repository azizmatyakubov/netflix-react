import React from "react";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  return (
    <>
      {/* <CommentList /> */}
      <AddComment asin={props.id} />
    </>
  );
};

export default CommentArea;
