import PropTypes from "prop-types";

function AppFnValidation(props) {
  return (
    <div>
      <h3>Type Check: Value</h3>
      <p>Number : {props.sampleNumber}</p>
      <p>Sting : {props.sampleString}</p>
      <p>Array : {props.sampleArray}</p>
      <p>Bool : {props.sampleBool ? "true" : "false"}</p>
      <p>Function : {props.samplefn(33)}</p>
      <p>Object : {props.sampleObject.obj1}</p>
      <p>Object : {props.sampleObject.obj2}</p>
    </div>
  );
}

AppFnValidation.defaultProps = {
  sampleNumber: 2,
  sampleString: "string hey bhai",
  sampleArray: [10, 20, 30],
  sampleBool: true,
  samplefn: function (someno) {
    return someno;
  },
  sampleObject: {
    obj1: "object1",
    obj2: "object2",
  },
};

AppFnValidation.propTypes = {
  sampleArray: PropTypes.array.isRequired,
  sampleBool: PropTypes.bool.isRequired,
  sampleFunc: PropTypes.func,
  sampleNumber: PropTypes.number,
  sampleString: PropTypes.string,
  sampleObject: PropTypes.object,
};

export default AppFnValidation;
