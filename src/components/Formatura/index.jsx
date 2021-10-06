import { useHistory } from "react-router";
import "./style.css";

const { useContext } = require("react");
const { DrinkContext } = require("../../providers/drinks");

const Formatura = () => {
  const { formatura, removeFromFormatura } = useContext(DrinkContext);
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
      <button onClick={() => handleNavigation("/casamento")}>CASAMENTO</button>
      <h2>Formatura</h2>
      <div className="motherDiv">
        {formatura.map((item) => (
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
            <button onClick={() => removeFromFormatura(item)}>REMOVER</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Formatura;
