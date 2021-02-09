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
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
        <div className="picture">
          <img src={data.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
