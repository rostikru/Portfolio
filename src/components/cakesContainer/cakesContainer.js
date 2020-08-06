import React from 'react';
import { buyCake } from '../../redux/index'
import { bakeCake } from '../../redux/index'
import { connect } from 'react-redux'

function CakesContainer(props) {
  return (
    <div>
      <h1>Number of cakes {props.numOfCakes}</h1>  
      <button onClick={props.buyCake}>Buy cakes</button>
      <button onClick={props.bakeCake}>Спекти cakes</button>
    </div>
  );
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cakeReducer.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        bakeCake: () => dispatch(bakeCake()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakesContainer);