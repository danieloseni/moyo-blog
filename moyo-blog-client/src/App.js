import Dashboard from 'components/dashboard/Dashboard';
import AuthorHeader from 'components/layout/AuthorHeader';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import {Fragment} from 'react'
import 'css/plugins.css';
import 'css/style.css';
import 'css/templete.css';
import 'css/skin/skin-1.css';



function App() {
  return (
    <Fragment>
        <Header />
        <AuthorHeader />
        <Dashboard />
        <Footer />
    </Fragment>  
  );
}

export default App;
