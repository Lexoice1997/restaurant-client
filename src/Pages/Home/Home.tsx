import { Typography } from "@mui/material";
import Categories from "../../components/Categories/Categories";
import Foods from "../../components/Foods/Foods";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div className="app">
      <Typography>Good Evening</Typography>
      <Search />
      <Categories />
      <Foods />
    </div>
  );
};

export default Home;
