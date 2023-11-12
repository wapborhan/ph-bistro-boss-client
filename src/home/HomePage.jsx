import { Helmet } from "react-helmet-async";
import Testimonials from "./Testimonials/Testimonials";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Featured from "./feature/Featured";
import PopularMenu from "./popular-menu/PopularMenu";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Banner />
      <Categories />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default HomePage;
