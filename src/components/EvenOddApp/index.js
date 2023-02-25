// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  ButtonIncrement = () => {
    this.setState(prev => ({
      count: prev.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    let OddOrEven

    if (count % 2 === 0) {
      OddOrEven = 'Even'
    } else {
      OddOrEven = 'Odd'
    }
    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {OddOrEven}</p>
          <button
            className="button"
            onClick={this.ButtonIncrement}
            type="button"
          >
            Increment
          </button>
          <p className="paragraph2">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
