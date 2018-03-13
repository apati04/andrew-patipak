import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';
import ProjectData from '../../api/projects';
import ProjectData2 from '../../api/projects2';

export default class Showcase extends Component {
  renderProjects(items) {
    return (
      <div className="card-deck">
        {items.map((objProps) => <ProjectCard {...objProps} />)}
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
            <div className="container">
              <div className="border-bottom mb-1 mt-1" />
              {this.renderProjects(ProjectData)}
              {this.renderProjects(ProjectData2)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
