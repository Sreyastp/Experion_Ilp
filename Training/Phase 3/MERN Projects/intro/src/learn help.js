const body = {
  color: "White",
  backgroundColor: "green",
  fontFamily: "Arial",
  height: 400,
};

const body1 = {
  color: "White",
  backgroundColor: "Red",
  fontFamily: "Arial",
};

function Ah3h3() {
  const a = 25;
  const b = 5;
  function ADD() {
    return a + b;
  }
  function SUB() {
    return a - b;
  }
  function DIV() {
    return a / b;
  }
  function MUL() {
    return a * b;
  }

  return (
    <div style={body}>
      <div>
        <>
          <h1 style={body1}>Calculator</h1>
        </>
        <ul>
          <h3>
            The Sum of the two Numbers is: <ADD />
          </h3>
          <h3>
            The Difference of the two Numbers is: <SUB />
          </h3>
          <h3>
            The Product of the two Numbers is: <MUL />
          </h3>
          <h3>
            The Quotient is: <DIV />
          </h3>
        </ul>
      </div>
    </div>
  );
}

export default Ah3h3;
