import image from "../assets/Banner.gif";
import Styles from "../components/Banner.module.css";

const Banner = () => {

    return (
      <div className={Styles.container}>
        <img className={Styles.image} src={image} />
            <form className={Styles.form} role="search">
                <input className={Styles.input} type="search" placeholder="Search"/>
                <button className={Styles.btn} type="submit">⌕</button>
            </form>
      </div>
    )
  }

export default Banner
