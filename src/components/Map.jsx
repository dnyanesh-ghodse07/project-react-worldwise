import styles from "./Map.module.css";

import { useNavigate, useSearchParams } from "react-router-dom";
const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <p>lat : {lat} </p>
      <p>lng : {lng} </p>
    </div>
  );
};

export default Map;
