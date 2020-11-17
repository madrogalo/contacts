import './App.css';
import React from 'react';
import Header from './components/header';
import SearchAppBar from './components/search';
import UsersTable from './components/table';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Header />
          <SearchAppBar />
          <UsersTable />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
