import React from "react";

const CreditCardTable = (props) => {
    const renderCreditCardList = () => {
        return props.creditCardList.map(card => {
            return (<tr>
                <td>{card.name}</td>
                <td>{card.cardNumber}</td>
                <td>£{card.cardBalance}</td>
                <td>£{card.cardLimit}</td>
            </tr>);
        });
    };

    return (
        <div className="row m-2 mt-5">
        <h4>Card Details</h4>
        <table className="table table-bordered table-striped mt-2" style={{width: "50rem"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Card Number</th>
                    <th>Balance</th>
                    <th>Limit</th>
                </tr>
            </thead>
            <tbody>
                
                    {props.creditCardList && props.creditCardList.length ? renderCreditCardList() : null}
                
            </tbody>
        </table>
        </div>
    );
};

export default CreditCardTable;