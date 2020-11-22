import React from 'react'
import '../App.css'


export default class Total extends React.Component {
    render() {
        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {this.props.total}
            </div>
          </div>
        )
    }
}