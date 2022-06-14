import React from 'react';

class Explanation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HTMLarray: [
        {
          title: "Step 1 - Create JSX Components ",
          description: "Write sample JSX components in a folder called src",
        },
        {
          title:
            "Step 2 - Use Babel CLI to transcribe JSX to browser-friendly Javascript",
          description:
            "JSX syntax is not readible by browsers. Install Babel CLI dependencies and include this following script in the package.json => 'step1-babel': 'babel src -d lib'",
        },
        {
          title: "Step 3 - Run the script step1-babel ",
          description:
            "Babel will generate generate browser friendly javascript in the lib folder",
        },
        {
          title:
            "Step 4 - Include the following script 'step2-webpack': 'webpack --config webpack.config.js'",
          description: "make sure to npm i -d webpack",
        },
        {
          title: "Step 5 - write a webpack.config.js file '",
          description:
            "A webpack.config.js file will dictate how the webpack should transform the javascript files in lib folder",
        },
        {
          title: "Step 6 - Use npm run step2-webpack",
          description:
            "By running this script, we then allow the javascript to accept require syntax, as require is Node",
        },
      ],
    };
  }

  render() {
    return (
      <div className="Explanation">
        <h2 className="center"> WebPack Explanation - Steps </h2>

        {this.state.HTMLarray.map((items) => {
          return (
            <div className="steps">
              <h3> {items.title} </h3>
              <p> {items.description} </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Explanation;
