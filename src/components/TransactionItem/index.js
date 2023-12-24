// Write your code here

import './index.css'

const TransactionItem = props => {
  const {data} = props
  const {title, amount, type} = data
  return (
    <li className="table-data-row">
      <p className="title">{title}</p>
      <p className="amount">{amount}</p>
      <p className="type">{type}</p>

      <button type="button" className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
