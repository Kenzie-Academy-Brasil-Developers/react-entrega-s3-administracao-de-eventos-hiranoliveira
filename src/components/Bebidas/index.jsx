import { useContext } from "react";
import { useHistory } from "react-router";
import { DrinkContext } from "../../providers/drinks";
import "./style.css";

const Bebidas = () => {
  const { drinks, addToFormatura, addToCasamento, addToConfra } =
    useContext(DrinkContext);

  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <>
      <button onClick={() => handleNavigation("/casamento")}>CASAMENTO</button>
      <button onClick={() => handleNavigation("/confra")}>
        CONFRATERNIZAÇÃO
      </button>
      <button onClick={() => handleNavigation("/formatura")}>FORMATURA</button>
      <div className="motherDiv">
        {drinks.map((item) => (
          <div className="cardBebida">
            <h3>{item.name}</h3>
            <p>{item.tagline}</p>
            <img className="imagem" src={item.image_url} alt={item.name} />
            <p>Início de fabricação: {item.first_brewed}</p>
            <p className="desc">{item.description}</p>
            <p>
              Quantidade: {item.volume.value}
              {item.volume.unit}
            </p>
            <button onClick={() => addToCasamento(item)}>ADD Casamento</button>
            <button onClick={() => addToConfra(item)}>
              ADD Confraternização
            </button>
            <button onClick={() => addToFormatura(item)}>ADD Formatura</button>
          </div>
        ))}
        {/* {casamento && casamento.map((item) => <p>{item.name}</p>)} */}
      </div>
    </>
  );
};

export default Bebidas;
