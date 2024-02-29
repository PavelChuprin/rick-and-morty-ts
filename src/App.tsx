import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/store";

import { API_URL } from "./utils/constants";
import { setInfo, setItems } from "./redux/characters/slice";
import { selectFiltersData } from "./redux/filter/selectors";
import { selectCharactersData } from "./redux/characters/selectors";
import { Items, Header, FilterBlock, Pagination, Wrapper } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const dispatch = useAppDispatch();
  const items = useSelector(selectCharactersData);
  const { currentPage, name, status, gender, species, type } =
    useSelector(selectFiltersData);

  async function getItems() {
    const queryName = name ? `&name=${name}` : "";
    const querySpecies = species ? `&species=${species}` : "";
    const queryType = type ? `&type=${type}` : "";

    try {
      setError("");
      if (name || status || gender || species || type) {
        const { data } = await axios.get(
          `${API_URL}?page=${currentPage}&status=${status}&gender=${gender}${queryName}${querySpecies}${queryType}`
        );
        dispatch(setItems(data.results));
        dispatch(setInfo(data.info));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      dispatch(setItems([]));
      setError("Error receiving characters, please try later...");
      if (axios.isAxiosError(error)) {
        if (error.response?.data.error === "There is nothing here") {
          setError("No such characters found");
        }
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getItems();
  }, [currentPage, name, status, gender, species, type]);

  return (
    <Wrapper>
      <Header />
      <FilterBlock />
      {error ? (
        <h1 style={{ padding: 20 }}>{error}</h1>
      ) : (
        <Items items={items} isLoading={isLoading} />
      )}
      {items.length !== 0 && <Pagination />}
    </Wrapper>
  );
};

export default App;
