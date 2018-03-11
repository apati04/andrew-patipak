import React from 'react'

export default ({title, description, photo}) => {
  return (
    <div>
      <div className="card">
        <img src={photo} alt="" className="card-img-top"/>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <p className="card-text">{description}<span className="card-footer"><small>link</small></span></p>
        </h5>
      </div>
    </div>
  )
}

