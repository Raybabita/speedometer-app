// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) this.setState(preState => ({count: preState.count + 10}))
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(preState => ({count: preState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            alt="speedometer"
            className="img-speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="speed-text">Speed is {count}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              className="accelerate-btn"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="apply-break-btn"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
