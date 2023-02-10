import './App.css';
import React, {useEffect, useState} from "react";
import CreditCardForm from './CreditCardForm';
import CreditCardTable from './CreditCardTable';
import Header from './Header';
import api from './../api/creditCard';

function App() {
  const [creditCardList, setCreditCardList] = useState([]);

  const retrieveCreditCards = async () => {
    try {
      const response = await api.get('/all');
      return response.data;
    } catch (err) {
      alert(err.response.data);
    }
  }
  const addCardHandler = async (cardDetails) => {
    try {
      const response = await api.post('/new', cardDetails);
      setCreditCardList([...creditCardList, response.data]);
    } catch (err ){
      alert(err.response.data);
    }
  }

  useEffect(() => {
    const getAllCreditCards = async () => {
      const allCards = await retrieveCreditCards();
      if (allCards) {
        setCreditCardList(allCards);
      }
    }
    getAllCreditCards();
  }, []);

  return (
    <div className="container-fluid">
      <Header/>
      <CreditCardForm addCardHandler={addCardHandler}/>
      <CreditCardTable creditCardList={creditCardList}/>
    </div>
  );
}

export default App;
