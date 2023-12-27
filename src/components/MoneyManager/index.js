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

class MoneyManager extends Component {
  constructor() {
    super()
    this.state = {
      balance: 0,
      income: 0,
      expenses: 0,
      historyTransaction: [],
      title: '',
      amount: 0,
      type: '',
    }
  }

  updateTitle = event => {
    console.log(event.target)
    this.setState({
      title: event.target.value,
    })
  }

  updateAmount = event => {
    const amount = event.target.value
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
    const amountNumber = parseFloat(amount)
    const updated = [...historyTransaction, {id, title, amount, type}]
    if (type === 'INCOME') {
      income += amountNumber
      balance += amountNumber
      console.log('amount added')
    }
    if (type === 'EXPENSES') {
      expenses += amountNumber
      balance -= amountNumber
      console.log('amount negated')
    }
    console.log(balance, expenses, income)

    this.setState({
      historyTransaction: updated,
      title: '',
      amount: 0,
      type: '',
      balance,
      income,
      expenses,
    })

    const titleEl = document.getElementById('title')
    titleEl.value = ''
    const amountEl = document.getElementById('amount')
    amountEl.value = ''
  }

  removeItem = (id, amount, type) => {
    const {historyTransaction} = this.state
    let {balance, income, expenses} = this.state
    const filtered = historyTransaction.filter(each => each.id !== id)
    const amountInt = parseFloat(amount)
    if (type === 'INCOME') {
      income -= amountInt
      balance -= amountInt
    }
    if (type === 'EXPENSES') {
      expenses -= amountInt
      balance -= amountInt
    }

    this.setState({
      historyTransaction: filtered,
      income,
      expenses,
      balance,
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

    console.log(typeof balance, typeof amount, typeof income, typeof expenses)

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
                id="title"
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
                id="amount"
                onChange={this.updateAmount}
              />
            </div>
            <div className="user-field">
              <label className="label-el" htmlFor="type-trans">
                TYPE
              </label>
              <select
                id="type-trans"
                onClick={this.updateType}
                className="input-el"
              >
                {transactionTypeOptions.map(each => (
                  <option selected value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
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
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>{`  `}</p>
              </div>

              <ul className="trans-table-items">
                {historyTransaction.map(each => (
                  <TransactionItem
                    data={each}
                    key={each.id}
                    removeItem={this.removeItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
