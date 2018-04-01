// Component Code Goes Here
// Takes in two props: the street and the city

import React from 'react';

class Address extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     fullAddress: `${props.street}, ${props.city}`
  //   }
  // }

  // render() {
  //   return (
  //     <div className="address">
  //       {this.state.fullAddress}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="address">
        {this.props.street}, {this.props.city}
      </div>
    );
  }
}

export default Address;
