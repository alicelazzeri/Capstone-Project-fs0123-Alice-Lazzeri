import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHardyFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";

const HardyPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getHardyFetch());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div>
      <>
        <div className="discoverMoreContainer d-flex flex-column justify-content-center align-items-center">
          <div className="hardyContainer">
            <h1 className="discoverMoreTitle">Thomas Hardy</h1>
          </div>
          <h3 className="discoverMoreSubtitle">
            Discover the selected range of Thomas Hardy's masterpieces offered on The Rabbit Hole!
          </h3>
        </div>
        <CarouselCard />
        <HomeButton />
      </>
    </div>
  );
};

export default HardyPage;
