import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}
  onClickMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }
  onClickbanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="Bg-container">
        <div className="Fruits-container">
          <h1 className="counting-heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span> bananas
          </h1>
          <div className="img-button-main-container">
            <div className="img-button-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png " alt="mango"
                className=""
              />
              <div>
                <button onClick={this.onClickMango}>Eat Mango</button>
              </div>
            </div>
            <div className="img-button-sub-container">
              <img alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className=""
              />
              <div>
                <button onClick={this.onClickbanana}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
