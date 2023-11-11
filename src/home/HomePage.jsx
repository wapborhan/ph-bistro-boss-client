import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Featured from "./feature/Featured";
import PopularMenu from "./popular-menu/PopularMenu";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      {/* <PopularMenu /> */}
      <Featured />
    </div>
  );
};

export default HomePage;
