import { Component } from "react";

class Studdata extends Component {
  render() {
    return (
      <li>
        Name : {this.props.data.Student_Name} , Age : {this.props.data.Age},
        Dept : {this.props.data.department}, Gender : {this.props.data.Gender}
      </li>
    );
  }
}
export default Studdata;
