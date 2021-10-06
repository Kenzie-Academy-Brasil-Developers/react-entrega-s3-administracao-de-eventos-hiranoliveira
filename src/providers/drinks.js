import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DrinkContext = createContext([]);

export const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setDrinks(res.data));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const [formatura, setFormatura] = useState([]);
  const [casamento, setCasamento] = useState([]);
  const [confra, setConfra] = useState([]);

  const addToFormatura = (item) => {
    setFormatura([...formatura, { item }]);
  };

  const removeFromFormatura = (item) => {
    const newFormatura = formatura.filter(
      (itemOnForma) => itemOnForma.item.name !== item.item.id
    );
    setFormatura(newFormatura);
  };

  const addToCasamento = (item) => {
    setCasamento([...casamento, { item }]);
    console.log(casamento);
  };

  const removeFromCasamento = (item) => {
    const newCasamento = casamento.filter(
      (itemOnCasamento) => itemOnCasamento.item.name !== item.item.name
    );
    setCasamento(newCasamento);
  };

  const addToConfra = (item) => {
    setConfra([...confra, { item }]);
  };

  const removeFromConfra = (item) => {
    const newConfra = confra.filter(
      (itemOnConfra) => itemOnConfra.item.name !== item.item.name
    );
    setConfra(newConfra);
  };

  return (
    <DrinkContext.Provider
      value={{
        drinks,
        formatura,
        addToFormatura,
        removeFromFormatura,
        casamento,
        addToCasamento,
        removeFromCasamento,
        confra,
        addToConfra,
        removeFromConfra,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};
