import React, { Component } from 'react'

class Idea extends Component {
  handleClick = () => {this.props.onClick(this.props.idea.id)}

  handleDelete = () => {this.props.onDelete(this.props.idea.id)}

  render() {
    return (
      <div className='Tile-container' key={this.props.idea.id}>
        <div className='tile' key={this.props.idea.id}>
          <span className="deleteButton" onClick={this.handleDelete}>X</span>
          <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
          <p onClick={this.handleClick}>{this.props.idea.body}</p>
        </div>
      </div>
    )
  }
}

export default Idea