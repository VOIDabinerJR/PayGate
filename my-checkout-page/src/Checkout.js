import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Mozambique',
    cardnumber: '',
    validtill: '',
    cvv: '',
    checkbox: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const cardspace = (e) => {
    let value = e.target.value;
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      value += ' ';
    }
    setForm({ ...form, cardnumber: value });
  };

  const addSlashes = (e) => {
    let value = e.target.value;
    if (value.length === 2) {
      value += ' ';
    }
    setForm({ ...form, validtill: value });
  };

  const handleSubmit = () => {
    const cartoes = {
      nome: form.cardnumber,
      idade: form.validtill
    };
    const jsonString = JSON.stringify(cartoes);
    alert(jsonString);
  };

  return (
    <div className="container">
      <h6>Checkout</h6>
      <span>x</span>
      <h1>Dados Pagamento</h1>
      <form>
        <label htmlFor="name">Nome
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required />
        </label>
        <label htmlFor="phone">Telefone
          <input type="text" name="phone" id="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label htmlFor="email">Email
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
        </label>
        <label htmlFor="country">
          <select name="country" id="country" value={form.country} onChange={handleChange} required>
            <option value="Mozambique">Mozambique</option>
            <option value="Angola">Angola</option>
            <option value="South Africa">South Africa</option>
          </select>
        </label>
        <label htmlFor="cardnumber">Card Number
          <input type="text" name="cardnumber" id="cardnumber" value={form.cardnumber} maxLength="19" onChange={cardspace} required />
        </label>
        <div className="float">
          <label htmlFor="validtill">Valid till
            <input type="text" name="validtill" id="validtill" value={form.validtill} maxLength="7" onChange={addSlashes} required />
          </label>
          <label htmlFor="cvv">CVV
            <input type="text" name="cvv" id="cvv" value={form.cvv} maxLength="3" onChange={handleChange} required />
          </label>
        </div>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" checked={form.checkbox} onChange={handleChange} />
          <p>Payment Address is the predefined</p>
        </label>
        <button type="button" onClick={handleSubmit}>Pagar 200.00 MZN</button>
      </form>
    </div>
  );
};

export default Checkout;
