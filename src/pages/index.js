import CountriesTable from "../components/CountriesTable/CountriesTable.jsx";
import Layout from "../components/Layout/Layout.jsx";
import SearchInput from "../components/SearchInput/SearchInput.jsx";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput placeholder="Filter by Name, Region or Subregion" />

      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
