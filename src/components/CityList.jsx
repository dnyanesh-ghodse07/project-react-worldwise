/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

const CityList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add city by clicking on a city map" />;

  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  );
};

export default CityList;
