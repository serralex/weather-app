import Layout from "../../components/ui/Layout";
import MainWeather from "./MainWeather";
import RecentSearchedCities from "./RecentSearchedCities";

const Home = () => {
  return (
    <Layout>
      <MainWeather />
      <RecentSearchedCities />
    </Layout>
  );
};

export default Home;
