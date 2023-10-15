import React from "react";
import styles from "../CountryCode/countryCode.module.css";

const CountryCode = (props) => {
  return (
    <div className={styles.code__container}>
      {
        <h2 title="Country Code">
          <span className={styles.country__code}>Country Code:</span>{" "}
          {props.weather}
        </h2>
      }
    </div>
  );
};

export default CountryCode;
