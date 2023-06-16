import './index.css'

const DenominationItem = props => {
  const {onWithdrawAmount, denominationItem} = props
  const {value} = denominationItem

  const onWithdraw = () => {
    onWithdrawAmount(value)
  }

  return (
    <li className="list">
      <button
        type="button"
        className="denomination-button"
        onClick={onWithdraw}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
