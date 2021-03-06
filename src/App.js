import React, { Component } from 'react';
import './App.css';
import SideContent from './components/sidecontent/SideContent';
import { Route, Switch, Link } from 'react-router-dom';
import MainMovieContent from './components/maincontent/MainMovieContent';
import logo from './images/food.png';

const apiInfo = {
  key: process.env.REACT_APP_MOVIE_NIGHT_KEY,
  limit: 20
};
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiInfo.key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(results => {
        this.setState({
          results: results.results
        });
      });
  }

  render() {
    return (
      <div className='gridContainer'>
        <header className='header'>
          <nav>
            <Link to='/'>
              <img src={logo} className='left' alt='ice cream logo'></img>
              <h2>Movie Night</h2>
            </Link>
          </nav>
        </header>
        <div className='mainContent'>
          <Switch>
            <Route
              exact
              path={'/:movieTitle'}
              render={props => (
                <MainMovieContent {...props} results={this.state.results} />
              )}
            />
            <Route
              path='/'
              render={() => (
                <div className='defaultMain'>
                  Select a movie!
                  <br></br>
                  <small>
                    Ice cream icon made by{' '}
                    <a
                      href='https://www.flaticon.com/authors/freepik'
                      title='Freepik'
                    >
                      Freepik
                    </a>{' '}
                    from{' '}
                    <a href='https://www.flaticon.com/' title='Flaticon'>
                      {' '}
                      www.flaticon.com
                    </a>
                  </small>
                </div>
              )}
            />
          </Switch>
        </div>

        <div className='sideContent'>
          <SideContent results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
