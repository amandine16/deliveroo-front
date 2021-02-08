import Menu from "./Menu";
import Panier from "./Panier";

const Content = ({ data }) => {
  return (
    <div className="Content">
      <div className="container d-flex">
        <Menu data={data} />
        <Panier />
      </div>
    </div>
  );
};

export default Content;
