import styles from "./CountriesTable.module.css";

const CountriesTable = ({ countries }) => {
    console.log(countries)
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
        </button>
      </div>
      
      {countries.map((country) => (
        <div className={styles.row} key={country.name}>
          <div className={styles.name}>{country.name.common}</div>
          <div className={styles.population}>{country.population}</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;