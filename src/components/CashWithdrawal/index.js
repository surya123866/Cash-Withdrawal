import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="App-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-image">
              <h1 className="nameLetter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-tag">Your Balance</p>
            <div className="balance-Number-container">
              <p className="balance-amount">{balance}</p>
              <p className="inRupeesText">In Balance</p>
            </div>
          </div>
          <p className="withdrawText">Withdraw</p>
          <p className="chooseSumText">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-button-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                onWithdrawAmount={this.onWithdrawAmount}
                denominationItem={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
