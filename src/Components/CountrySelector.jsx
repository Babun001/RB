import { useState } from "react";
import "./ComponentsStyles/CountrySelector.css";

const countries = [
  {
    name: "India",
    code: "IN",
    flag: "https://flagcdn.com/w40/in.png"
  },
  {
    name: "Nepal",
    code: "NP",
    flag: "https://flagpedia.net/data/flags/w1600/np.png"
  }
];

export default function CountrySelector() {
  const [selected, setSelected] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const selectCountry = (country) => {
    setSelected(country);
    setShowDropdown(false);
  };

  return (
    <div className="country-selector">
      <div className="selected" onClick={toggleDropdown}>
        <img src={selected.flag} alt={selected.name} className="flag-img" />
        <span className="arrow">▸</span>
      </div>
      {showDropdown && (
        <ul className="dropdownflag">
          {countries.map((country) => (
            <li key={country.code} onClick={() => selectCountry(country)}>
              <img src={country.flag} alt={country.name} className="flag-img" />
              <span className="country-name">{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
