import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify'
import './App.css'
import Options from './Options/Options'
import Cart from './Cart/Cart'


class App extends React.Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    })
  }
   USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
 total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    )
 

render() {
  return (
    <div className="App">
      <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Options  USCurrencyFormat={this.USCurrencyFormat} updateFeature={this.updateFeature} selected={this.state.selected}/>
        </form>
      <Cart  USCurrencyFormat={this.USCurrencyFormat} selected={this.state.selected} total={this.total}/>
    </div>
  )
}
}

export default App;