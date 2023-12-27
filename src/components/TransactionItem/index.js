// Write your code here

import './index.css'

const TransactionItem = props => {
  const {data, removeItem} = props
  const {title, amount, type} = data

  const removeExpenses = () => {
    const {id} = data
    removeItem(id, amount, type)
  }

  return (
    <li className="table-data-row">
      <div className="data-result">
        <p className="title">{title}</p>
        <p className="amount">{amount}</p>
        <p className="type">{type}</p>
      </div>
      <button data-testid="delete" type="button" className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
          onClick={removeExpenses}
        />
      </button>
    </li>
  )
}

export default TransactionItem
