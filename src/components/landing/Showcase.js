import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';
import ProjectData from '../../api/projects';
import ProjectData2 from '../../api/projects2';

export default class Showcase extends Component {
  renderProjects(items) {
    return (
      <div className="row d-flex justify-content-center">
        <div className="card-group">
          {items.map((objProps) => <ProjectCard {...objProps} />)}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <section id="showcase">
          <div className="container-fluid d-flex flex-column">
            <h1
              style={{ marginTop: '-20px' }}
              className="display-3 text-center"
            >
              Portfolio
            </h1>
            <div className="border-bottom mb-3 mt-3" />
            {this.renderProjects(ProjectData)}
            {this.renderProjects(ProjectData2)}
          </div>
        </section>
      </div>
    );
  }
}
