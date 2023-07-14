import Layout from "../../components/ui/Layout";
import MainWeather from "./MainWeather";
import RecentSearchedCities from "./RecentSearchedCities";

const Home = () => {
  return (
    <Layout>
      <MainWeather />
      <div className="pt-8">
        <RecentSearchedCities />
      </div>
    </Layout>
  );
};

export default Home;
