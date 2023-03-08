import HeaderCartButton from "./HeaderCartButton";
import mealsHeaderImage from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Glorious Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsHeaderImage} alt="Assortment of food on table" />
      </div>
    </>
  );
};

export default Header;
