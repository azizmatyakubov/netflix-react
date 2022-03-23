import React from "react";

class AddComment extends React.Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  componentDidMount = async () => {
    this.postData();
  };

  postData = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        header: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDc2MTg4NjcsImV4cCI6MTY0ODgyODQ2N30.sjBcOq7t0iFLGCIP4r0XBsPesao96F_p7I7ULnP2fdc",
        },
        method: "POST",
        body: JSON.stringify(this.state.comments),
      }
    );
  };

  render() {
    return (
      <div>
        <input />
      </div>
    );
  }
}

export default AddComment;
