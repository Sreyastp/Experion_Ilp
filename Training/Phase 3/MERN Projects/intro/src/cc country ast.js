const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  fontFamily: "Arial",
};

const body = {
  color: "Red",
  backgroundColor: "white",
  fontFamily: "Arial",
};

function App() {
  return (
    <>
      {" "}
      <h1 style={mystyle}>Country Details </h1>
      <CO country="India" />
      <DI
        disc=" India, officially the Republic of India, is a country in South Asia. It
        is the seventh-largest country by area, the second-most populous
        country, and the most populous democracy in the world."
      />
      <IM />
      <CO country="China" />
      <DI
        disc=" China, officially the People's Republic of China,
         is a country in East Asia. It is the world's most populous country, 
         with a population of more than 1.4 billion. China spans five geographical time zones 
         and borders 14 different countries, the second most of any country in the world after Russia."
      />
      <CN />
      <CO country="Austrailia" />
      <DI
        disc="Australia, officially the Commonwealth of Australia, 
       is a sovereign country comprising the mainland of the Australian continent,
       the island of Tasmania, and numerous smaller islands. 
       It is the largest country by area in Oceania and the world's sixth-largest country."
      />
      <AU />
      <CO country="America" />
      <DI
        disc="The U.S. is a country of 50 states covering a vast swath of North America, 
        with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.
        Major Atlantic Coast cities are New York, a global finance and culture center,
        and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking"
      />
      <US />
      <CO country="Pakisthan" />
      <DI
        disc="Pakistan, officially the Islamic Republic of Pakistan, 
       is a country in South Asia.
       It is the world's fifth-most populous country, with a population exceeding 225.1 million, 
       and has the world's second-largest Muslim population. 
       Pakistan is the 33rd-largest country by area, spanning 881,913 square kilometres."
      />
      <PK />
    </>
  );
}

function CO(args) {
  return (
    <div>
      <h2 style={body}>{args.country} </h2>
    </div>
  );
}

function DI(args) {
  return (
    <div>
      <p>{args.disc}</p>
    </div>
  );
}

function IM(args) {
  return (
    <div>
      <img
        src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
        alt=""
        width="100"
        height="70"
      />
    </div>
  );
}

function CN(args) {
  return (
    <div>
      <img
        src="https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png"
        alt=""
        width="100"
        height="70"
      />
    </div>
  );
}

function US(args) {
  return (
    <div>
      <img
        src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
        alt=""
        width="100"
        height="70"
      />
    </div>
  );
}
function PK(args) {
  return (
    <div>
      <img
        src="https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png"
        alt=""
        width="100"
        height="70"
      />
    </div>
  );
}
function AU(args) {
  return (
    <div>
      <img
        src="https://cdn.countryflags.com/thumbs/australia/flag-800.png"
        alt=""
        width="100"
        height="70"
      />
    </div>
  );
}

export default App;
