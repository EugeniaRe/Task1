import "./Main.css";
import { Modal } from "../Modal/Modal";
import { useFetchData } from "../../hooks/useFetchData";

export function Main() {
  const [{ query, people, isLoading, isError }, setQuery] = useFetchData("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <main>
      <input
        className='filter-input'
        type='search'
        value={query}
        onChange={(e) => handleQuery(e)}
      />

      <ul>
        {people.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
      <Modal isOpen={isLoading}>Loading...</Modal>
    </main>
  );
}
