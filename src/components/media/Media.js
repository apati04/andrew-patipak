import React, { Component } from 'react';
import MediaList from './MediaList';
export default class Media extends Component {
  render() {
    return (
      <div>
        <h4 className="text-uppercase mb-4">On the Web</h4>
        <MediaList />
      </div>
    );
  }
}
