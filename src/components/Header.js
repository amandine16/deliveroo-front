import Content from "./Content";
import logo from "../assets/img/logo.svg";
const Header = ({ data }) => {
  return (
    <div className="Header">
      {/* logo */}
      <div className="logo container">
        <img src={logo} alt="" />
      </div>
      {/* Info du restaurant - name + description + picture */}
      <div className="Restaurant-infos container">
        <div className="title-description">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="picture">
          <img src={data.restaurant.picture} alt="" />
        </div>
      </div>
      <Content data={data} />
    </div>
  );
};

export default Header;
