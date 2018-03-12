import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';
import ProjectData from '../../api/projects';
import ProjectData2 from '../../api/projects2';

export default class Showcase extends Component {
  renderProjects(items) {
    return (
      <div className="row d-flex justify-content-around m-2">
        <div className="card-deck">
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
            <h3>Projects I've Worked On</h3>
            {this.renderProjects(ProjectData)}
            {this.renderProjects(ProjectData2)}
          </div>
        </section>
      </div>
    );
  }
}
