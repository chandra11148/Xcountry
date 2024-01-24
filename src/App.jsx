import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error of fetching: ", err));
  }, []);
  const countryCard = {
    width: "200px",
    padding: "10px",
    margin: "10px",
    border: "1px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  const countryContainer = {
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={countryContainer}>
      {countries.map((country) => (
        <div key={country.cca3} style={countryCard}>
          <img
            src={country.flags.png}
            alt={country.name.common}
            width="100px"
          />
          <h2>{country.name.official}</h2>
        </div>
      ))}
    </div>
  );
}
