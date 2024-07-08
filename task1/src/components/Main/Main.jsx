import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";

export function Main() {
  const [people, setPeople] = useState([]);

  async function loadPeople(event) {
    const value = event.target.value;

    let response;
    let results;
    if (value === "") {
      response = await axios.get(`https://swapi.dev/api/people`);
      results = response.data.results;
    } else {
      response = await axios.get(
        `https://swapi.dev/api/people/?search=${value}`
      );
      results = response.data.results.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }

    setPeople(results);
  }

  useEffect(() => {
    async function requestPeople() {
      const response = await axios.get("https://swapi.dev/api/people");
      setPeople(response.data.results);
    }
    requestPeople();
  }, []);

  const filterDebounced = debounce(loadPeople, 500);

  return (
    <main>
      <input
        className='filter-input'
        type='text'
        onChange={(e) => filterDebounced(e)}
      />

      <ul>
        {people.map((man) => (
          <li key={man.url}>{man.name}</li>
        ))}
      </ul>
    </main>
  );
}
