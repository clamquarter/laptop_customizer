import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css'
import Options from './Options/Options'
import Cart from './Cart/Cart'


class App extends React.Component {
  state = {
    selected: {
      Processor: {
        name: null,
        cost: null
      },
      'Operating System': {
        name: null,
        cost: null
      },
      'Video Card': {
        name: null,
        cost: null
      },
      Display: {
        name: null,
        cost: null
      }
    },
    total: null
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
      total: Object.keys(selected).reduce(
        (acc, curr) => acc + selected[curr].cost,
        0
      )
    })
  }
   USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
 
 

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
      <Cart  USCurrencyFormat={this.USCurrencyFormat} selected={this.state.selected} total={this.state.total}/>
    </div>
  )
}
}

export default App;