import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";
const baseUrl = "https://swapi.dev/api/people/?search=";
export function useFetchData(initialQuery) {
  const [query, setQuery] = useState(initialQuery);
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const filterDebounced = useDebounce(query, 500);
  useEffect(() => {
    async function requestPeople() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseUrl}${filterDebounced}`);

        setPeople(response.data.results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    requestPeople();
  }, [filterDebounced]);

  return [{ query, people, isLoading, isError }, setQuery];
}
