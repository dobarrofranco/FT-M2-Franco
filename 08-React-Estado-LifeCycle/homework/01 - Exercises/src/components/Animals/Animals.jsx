import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.animals.map((e)=>{
          return (
            <div>
              <h5>{e.name}</h5>
              <img src= {e.image} alt={e.name} width='300px'/>
              <span>{e.specie}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
