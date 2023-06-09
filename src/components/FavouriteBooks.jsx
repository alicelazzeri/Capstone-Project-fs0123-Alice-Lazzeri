import { useDispatch, useSelector } from "react-redux";
import FavTable from "./FavTable";
import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";
import { addToFavouritesAction } from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";

const FavouritesBooks = () => {
  const favourites = useSelector(state => state.favourites.favourites.content);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(addToFavouritesAction());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="favContainer">
      <h1 className="favTitle text-center ms-0">My Books</h1>
      <p className="favBody mb-5 px-5">
        In this section, you will find all the books you fell in love with, or those that simply piqued your attention.
        You can give them a rating too, if you want!
      </p>
      {isLoading ? (
        <LoadingSpinner />
      ) : favourites && favourites.length > 0 ? (
        <div className="mt-4">
          <FavTable />
        </div>
      ) : (
        <div className="noFavContainer">
          <h1 className="noFavTitle mb-3">No favourite books have been added to the list yet. </h1>
          <p className="noFavBody mb-5">
            Go back to the homepage and search for your favourite books and add them to this section!
          </p>
          <HomeButton />
        </div>
      )}
    </div>
  );
};

export default FavouritesBooks;
