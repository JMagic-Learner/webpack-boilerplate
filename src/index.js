import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/Button";
import Explanation from "./components/Explanation/Explanation";
import "./stylesheets/index.scss";

class HelloMessage extends React.Component {
  constructor(props){
    super(props),
    this.state={
        name: "End-User"
    }
  }
  render() {
    return (
      <div>
        Hello {this.props.name}
        <p> This is an example of boilerplate-webpack</p>
        <Explanation />
        <Button></Button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="This is an example boilerplate" />,
  document.getElementById("App")
);
