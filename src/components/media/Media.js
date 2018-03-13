import React, { Component } from 'react';
import MediaList from './MediaList';
export default class Media extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-between col-md-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">On the Web</h4>
        <MediaList />
      </div>
    );
  }
}
