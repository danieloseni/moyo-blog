import 'App.css';
import 'scss/app-dark.scss'
import 'scss/bootstrap-dark.scss'
import 'scss/icons.scss';

import { Fragment } from 'react';
import Header from 'components/layout/Header';
import BreadCrumbsBar from 'components/layout/BreadCrumbsBar';
import Body from 'components/layout/Body';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  document.title = "Moyo Dashboard"
  return (
    <Fragment>
      <Router>
        <Header />
        <BreadCrumbsBar />
        <Body />
      </Router>

    </Fragment>
  );
}

export default App;
