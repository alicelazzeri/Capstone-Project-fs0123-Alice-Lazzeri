import { BsFillSearchHeartFill } from "react-icons/bs";
import SearchInput from "./SearchInput";
import SearchCard from "./SearchCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryBookFetch } from "../redux/actions";

const BookSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQueryBookFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="searchContainer">
        <h1 className="searchTitle">
          <BsFillSearchHeartFill className="me-3" />
          Search Page
        </h1>
        <p className="bodySearch">Make your own search by book, author or category.</p>
      </div>
      <SearchInput setSearchText={setSearchText} setShowResults={setShowResults} />
      {showResults && <h4 className="resultsTitle">Your search for "{searchText}" returned the following results:</h4>}
      <SearchCard />
    </>
  );
};

export default BookSearch;
