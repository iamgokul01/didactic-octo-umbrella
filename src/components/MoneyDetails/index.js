// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {activites} = this.props
    const {income, expenses} = activites
    let {balance} = activites

    balance = income - expenses
    return (
      <div className="money-details-flexbox">
        <div className="card-container-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-trans-img"
          />
          <div className="money-live-details">
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {balance}</p>
          </div>
        </div>
        <div className="card-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-trans-img"
          />
          <div className="money-live-details">
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {income}</p>
          </div>
        </div>
        <div className="card-container-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-trans-img"
          />
          <div className="money-live-details">
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expenses}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
