import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';

class AddedIngredient extends Component {

  render(){
    return(
      <div>
        <Well bsSize="small">
          {this.props.text}
          <Button className="right" onClick={()=>this.props.deleteIngredient(this.props.text)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </Well>
      </div>
    );
  }

}

export default AddedIngredient;
