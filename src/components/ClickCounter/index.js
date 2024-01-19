import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Increment = () => {
    console.log('Clicked Increment')
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div className="bg-container">
          <h1 className="heading">
            The Button has been clicked {count} <br />
            <span className="times">times</span>
          </h1>
          <p className="paragraph">Click the button to increase the count!</p>
          <button className="button" onClick={this.Increment}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
