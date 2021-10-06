import { useHistory } from "react-router";
import "./style.css";

const { useContext } = require("react");
const { DrinkContext } = require("../../providers/drinks");

const Confra = () => {
  const { confra, removeFromConfra } = useContext(DrinkContext);
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <>
      <button onClick={() => handleNavigation("/")}>HOME</button>
      <button onClick={() => handleNavigation("/casamento")}>CASAMENTO</button>
      <button onClick={() => handleNavigation("/formatura")}>FORMATURA</button>
      <h2>Confraternização</h2>
      <div className="motherDiv">
        {confra.map((item) => (
          <div className="cardBebida">
            <h3>{item.item.name}</h3>
            <p>{item.item.tagline}</p>
            <img
              className="imagem"
              src={item.item.image_url}
              alt={item.item.name}
            />
            <p>Início de fabricação: {item.item.first_brewed}</p>
            <p className="desc">{item.item.description}</p>
            <p>
              Quantidade: {item.item.volume.value}
              {item.item.volume.unit}
            </p>
            <button onClick={() => removeFromConfra(item)}>REMOVER</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Confra;
