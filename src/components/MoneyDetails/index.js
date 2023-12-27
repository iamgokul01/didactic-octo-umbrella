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
            <h1 data-testid="balanceAmount">Rs {balance}</h1>
          </div>
        </div>
        <div className="card-container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="balance"
            className="money-trans-img"
          />
          <div className="money-live-details">
            <p>Your Income</p>
            <h1 data-testid="incomeAmount">Rs {income}</h1>
          </div>
        </div>
        <div className="card-container-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="balance"
            className="money-trans-img"
          />
          <div className="money-live-details">
            <p>Your Expenses</p>
            <h1 data-testid="expensesAmount">Rs {expenses}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
