import React from 'react';
import image from '../assets/images/logo-DH.png'
import PropTypes from 'prop-types'
import { ContentWrapper, GenresInDb, LastMovieInDb, ContentRowMovies, MoviesTable , SearchMovies, NotFound } from './index'
import { Link, Route, Routes } from 'react-router-dom'




export default function SideBar(props) {
  return (
    <>  
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Link exact className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                              <div className="sidebar-brand-icon">
                                    <img className="w-100" src={image} alt="Digital House" />
                              </div>
                        </Link>

            <hr className="sidebar-divider my-0" />
                  <li className="nav-item active">
                        <Link className="nav-link" to="/">
                              <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard - DH movies</span>
                        </Link>
                  </li>
            <hr className="sidebar-divider" />


            <div className="sidebar-heading">Actions</div>
            { props.sideBar.map( (nav) => 
                  nav.title ? (
                        <li key={nav.id} className="nav-item">
                                    <Link className="nav-link collapsed" to={nav.route}>
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>{nav.title}</span></Link>
                        </li>
                  ): null
            )}
            <hr className="sidebar-divider d-none d-md-block" />
      </ul>


      <Routes>
            <Route path ='/' exact  Component={ContentWrapper} />
            <Route path ='/genres' exact  Component={GenresInDb} />
            <Route path ='/lastMovie' exact  Component={LastMovieInDb} />
            <Route path ='/stats' exact  Component={ContentRowMovies} />
            <Route path ='/table' exact  Component={MoviesTable} />
            <Route path ='/searchmovies' exact  Component={SearchMovies} />
            <Route Component={NotFound} />                          
      </Routes>

            {/* 
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/searchmovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch> 
            */}
    </>
  );
}



// PROP TYPES

SideBar.propTypes = {
      sideBar: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
};

SideBar.defaultProps = {
      sideBar: [
        {
          id: "default",
          title: "Default",
        },
      ],
    };


