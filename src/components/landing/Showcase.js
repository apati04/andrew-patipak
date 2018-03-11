import React, { Component } from 'react'
import ProjectCard from '../ProjectCard';
const PROJECTS = [
  { 
    title: "Learn JS",
    description: "Educate yourself on Javascript with this simple app. Made with React",
    photo: '/img/learnjs.jpg'
  }
]
export default class Showcase extends Component {
  renderProjects() {
    return PROJECTS.map(objProps => <ProjectCard {...objProps}/>);
  }
  render() {
    return (
      <section id="showcase" className="container-fluid">
      {this.renderProjects()}
      </section>
    )
  }
}
