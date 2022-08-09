import { useState } from "react";

const AddItem = () => {
  const [amount, setAmount] = useState(0.0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [recipient, setRecipient] = useState("");

  return (
    <form className="app">
      <h3>Add Expense</h3>
      <label>Value (INR)</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Category</label>
      <input
        type="text"
        value={category.label}
        onChange={(e) =>
          setCategory({
            color: "#ffffff",
            icon: "builtin:shoppingCart",
            label: e.target.value,
          })
        }
      />

      <label>Payment Method</label>
      <input
        type="text"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />

      <label>Recepient (Merchant)</label>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />

      <label>Wallet</label>
      <select>
        <option value="wallet1">Wallet 1</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddItem;
