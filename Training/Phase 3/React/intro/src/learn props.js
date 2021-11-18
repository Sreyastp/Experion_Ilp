function App() {
  const country = "INDIA";

  return (
    <>
      {" "}
      <p>Hello World </p>
      <HI name="Merc" country="Aus" />
      <HI />
      <HI name="Volvo" />
      <HI name="Leyland" country={country} />
    </>
  );
}

function HI(args) {
  return (
    <div>
      <p>
        Hi {args.name} from {args.country}{" "}
      </p>
    </div>
  );
}

export default App;
