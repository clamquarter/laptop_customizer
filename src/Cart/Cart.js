import React from 'react'
import '../App.css'
import Total from './Total'
import Summary from './Summary'

  

export default class Cart extends React.Component {
  render() {
   
      return (
     
        <main>
          <section className="main__summary">
            <h2>Your cart</h2>
           <Summary selected = {this.props.selected} cost={this.props.USCurrencyFormat.format}/>
          <Total total={this.props.USCurrencyFormat.format(this.props.total)} />
          </section>
        </main>
    )
    }
    }

    


    