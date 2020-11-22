import React from 'react'
import '../App.css'
import FEATURES from './Features'
import slugify from 'slugify'
import Item from './Item'

// This object will allow us to
// easily convert numbers into US dollar values


export default class Options extends React.Component {
    render() {
       const features = FEATURES
       const featureList = Object.keys(features).map((feature, idx) => {
     const featureHash = feature + '-' + idx;
     const options = features[feature].map(item => {
     const itemHash = slugify(JSON.stringify(item))
      return (
        <Item
        key={itemHash}
        id={itemHash}
        name={slugify(feature)}
        checked={item.name === this.props.selected[feature].name}
        onChange={e => this.props.updateFeature(feature, item)}
        htmlFor={itemHash}
        itemName={item.name}
        cost={this.props.USCurrencyFormat.format(item.cost)}
        />
        
      )
    })
    return <fieldset className="feature" key={featureHash}>
    <legend className="feature__name">
      <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset> 
  } 
  )
return featureList
    
    }

    
}
