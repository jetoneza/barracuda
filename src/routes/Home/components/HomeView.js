import React, {Component} from 'react'
import { Link } from 'react-router';

class HomeView extends Component {
  componentDidMount() {
    this.props.connectApi()
  }
  render() {
    return (
        <div className="home text-center">
          <div className="theme-box-group">
            <div className="box box-1">Ba</div>
            <div className="box box-2">Ra</div>
            <div className="box box-3">Cu</div>
            <div className="box box-4">Da</div>
          </div>
          <div className="input-group">
            <input type="text" className="form-control"/>
          </div>
          <div className="actions">
            <div className="btn btn-primary btn-search">Barracuda Search</div>
            {/* This is only temporary */}
            <Link to="/music" className="btn btn-success">/music</Link>
          </div>
        </div>
    );
  }
}

export default HomeView
