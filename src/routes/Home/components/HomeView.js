import React, {Component} from 'react'

class HomeView extends Component {
  render() {
    return (
        <div className="home text-center">
          <h1 className="title">Barracuda</h1>
          <div className="input-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="actions">
            <div className="btn btn-default">Barracuda Search</div>
          </div>
        </div>
    );
  }
}

export default HomeView
