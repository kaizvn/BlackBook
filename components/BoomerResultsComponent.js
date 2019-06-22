import { connect } from 'react-redux';
import React from 'react';

import { CardBoomerInformationComponent } from './CardBoomerInformationComponent';

const connectToRedux = connect(
  state => ({
    boomers: state.boomers
  }),
  null
);

class BoomerResultsComponent extends React.Component {
  render() {
    const { boomers = {} } = this.props;
    console.log(boomers);
    return (
      <div>
        {boomers.map((boomer, index) => (
          <CardBoomerInformationComponent boomer={boomer} key={index} />
        ))}
      </div>
    );
  }
}

export default connectToRedux(BoomerResultsComponent);
