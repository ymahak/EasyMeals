import styles from "./mainvirtual.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { AuthContext } from "../../context/authContext";



const MainVirtual = () => {
  const { userData } = useContext(AuthContext);
  const { mainBannerId, blogData } = useContext(AppContext);
  const [selectData] = blogData.filter((i) => i.id === mainBannerId);
  return (
    <section className={styles["p-main-virtual"]}>
      <div className={styles["p-main-virtual__inner"]}>
        <div className={styles["p-main-virtual__content"]}>
          <div className={styles["p-main-virtual__info"]}>
            <span>
              <i className="fa-brands fa-readme"></i>
              {selectData.mins} mins
            </span>
            <span>
              <i className="fa-solid fa-tag"></i>
              Tips & Tricks
            </span>
          </div>
          <h1>
            {selectData.title.length > 30
              ? selectData.title.substring(0, 30) + "..."
              : selectData.title}
          </h1>
          <p>
            {selectData.desc.length > 200
              ? selectData.desc.substring(0, 200) + "..."
              : selectData.desc}
            <Link to={`/detail/${selectData.id}`}>see more</Link>
          </p>
          <div className={styles["p-main-virtual__user-chip"]}>
            
            <div>
              <h4>Mahak</h4>
              <p>Learn and cook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainVirtual;
