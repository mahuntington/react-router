import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class About extends React.Component{
    render(){
        return <h1>About</h1>
    }
}

class Topics extends React.Component{
    render(){
        return <h1>Topics: {this.props.match.params.id}</h1>
    }
}

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics/awesome">Topics</Link>
                </li>
            </ul>
            <Route path="/about" component={About}/>
            <Route path="/topics/:id" component={Topics}/>
        </div>
    </Router>,
    document.querySelector('main')
);
