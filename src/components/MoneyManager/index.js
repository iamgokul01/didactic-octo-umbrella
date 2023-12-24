import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

const transData = [
  {
    id: uuid(),
    title: 'Salary',
    amount: 'Rs 5000',
    type: 'Income',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    historyTransaction: transData,
    title: '',
    amount: '',
    type: '',
  }

  updateTitle = event => {
    console.log(event.target)
    this.setState({
      title: event.target.value,
    })
  }

  updateAmount = event => {
    const amount = `Rs ${event.target.value}`
    this.setState({
      amount,
    })
  }

  updateType = event => {
    console.log(event.target)
    this.setState({
      type: event.target.value,
    })
  }

  addTitle = event => {
    this.setState({
      title: event.target.option,
    })
  }

  addTransItem = () => {
    const {historyTransaction, title, amount, type} = this.state
    let {balance, expenses, income} = this.state
    const id = uuid()
    const updated = [...historyTransaction, {id, title, amount, type}]

    if (type === 'INCOME') {
      income += amount
      balance += amount
    } else {
      expenses += amount
      balance -= amount
    }
    console.log(amount)

    this.setState({
      historyTransaction: updated,
      title: '',
      amount: '',
      type: '',
      balance,
      income,
      expenses,
    })
  }

  render() {
    const {
      historyTransaction,
      balance,
      income,
      expenses,
      // eslint-disable-next-line
      title,
      // eslint-disable-next-line
      amount,
      // eslint-disable-next-line
      type,
    } = this.state

    const moneyDetailsProp = {
      balance,
      income,
      expenses,
    }

    return (
      <div className="app-container">
        <div className="welcome-banner-section">
          <h1 className="greet-user">Hi,Gokul</h1>
          <p className="sub-app-title">
            Welcome back to your{' '}
            <span className="app-title">Money Manager</span>
          </p>
        </div>

        <div className="money-details-section">
          <MoneyDetails activites={moneyDetailsProp} />
        </div>

        <div className="transaction-controller-section">
          <div className="add-trans-details">
            <h1>Add Transaction</h1>
            <div className="user-field">
              <label className="label-el" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                className="input-el"
                placeholder="TITLE"
                name="title"
                onChange={this.updateTitle}
              />
            </div>
            <div className="user-field">
              <label className="label-el" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                className="input-el"
                placeholder="AMOUNT"
                name="amount"
                onChange={this.updateAmount}
              />
            </div>
            <div className="user-field">
              <label className="label-el" htmlFor="type-trans">
                TYPE
              </label>
              <select
                name="type-trans"
                onChange={this.updateType}
                className="input-el"
              >
                {transactionTypeOptions.map(each =>
                  each.optionId === 'INCOME' ? (
                    <option selected>{each.displayText}</option>
                  ) : (
                    <option>{each.displayText}</option>
                  ),
                )}
              </select>
              <button
                type="button"
                className="add-btn"
                onClick={this.addTransItem}
              >
                Add
              </button>
            </div>
          </div>

          <div className="trans-history-section">
            <h1>History</h1>
            <div className="table-flexbox">
              <div className="trans-table-header">
                <h1>Title</h1>
                <h1>Amount</h1>
                <h1>Type</h1>
                <h1>{`  `}</h1>
              </div>

              <div className="trans-table-items">
                <ul>
                  {historyTransaction.map(each => (
                    <TransactionItem data={each} id={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
