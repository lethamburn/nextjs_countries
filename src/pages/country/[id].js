const Country = ({ country }) => {
  
  return <div>Country</div>;
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);

  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};
