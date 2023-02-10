import React, { useState } from "react";

const CreditCardForm = (props) => {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardLimit, setCardLimit] = useState("");

    const addCard = (e) => {
        e.preventDefault();
        if(name.length === 0 || !name.match(/^[A-Za-z]*$/)) {
            alert('Invalid Name');
            return;
        }
        if(cardNumber.length <= 15 || !cardNumber.match(/^[0-9]*$/ || cardNumber.length >= 20)) {
            alert('Invalid Card Number');
            return;
        }
        if(cardLimit.length === 0 || !cardLimit.match(/^[0-9]*$/)) {
            alert('Invalid Limit');
            return;
        }
        props.addCardHandler({name, cardNumber, cardLimit});
        setName("");
        setCardNumber("");
        setCardLimit("");
    }

    return (
        <div className="row m-2 mt-3">
            <h4>Add Card</h4>
            <div className="card" style={{ width: "22rem" }}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="cardName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="cardName" aria-describedby="nameHelp" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <div id="nameHelp" className="form-text">Please enter the full name as displayed on the card.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" aria-describedby="cardNumberHelp" value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)} required />
                            <div id="cardNumberHelp" className="form-text">Can go upto 19 digits</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cardLimit" className="form-label">Limit</label>
                            <input type="text" className="form-control" id="cardLimit" value={cardLimit}
                                onChange={(e) => setCardLimit(e.target.value)} required/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addCard}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default CreditCardForm;