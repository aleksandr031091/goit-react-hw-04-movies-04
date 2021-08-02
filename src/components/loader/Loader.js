import Loader from "react-loader-spinner";
import css from "./Loader.module.css";

const LoaderMovie = () => {
  return (
    <div className={css.loader}>
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderMovie;
