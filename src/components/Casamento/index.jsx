import { useHistory } from "react-router";
import "./style.css";

const { useContext } = require("react");
const { DrinkContext } = require("../../providers/drinks");

const Casamento = () => {
  const { casamento, removeFromCasamento } = useContext(DrinkContext);
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <>
      <button onClick={() => handleNavigation("/")}>HOME</button>
      <button onClick={() => handleNavigation("/confra")}>
        CONFRATERNIZAÇÃO
      </button>
      <button onClick={() => handleNavigation("/formatura")}>FORMATURA</button>
      <h2>Casamento</h2>
      <div className="motherDiv">
        {casamento.map((item) => (
          <div className="cardBebida">
            <h3>{item.item.name}</h3>
            <p>{item.item.tagline}</p>
            <img
              className="imagem"
              src={item.item.image_url}
              alt={item.item.name}
            />
            <p>Início de fabricação: {item.item.first_brewed}</p>
            <p className="desc">{item.description}</p>
            <p>
              Quantidade: {item.item.volume.value}
              {item.item.volume.unit}
            </p>
            <button onClick={() => removeFromCasamento(item)}>REMOVER</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Casamento;
