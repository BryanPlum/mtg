import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Banner from './components/banner';
// import Search from './components/search';
import App from './components/app';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Banner />, 
  document.getElementById('banner')
);


// ReactDOM.render(
//   <Search />, 
//   document.getElementById('search')
// );

ReactDOM.render(
  <App />,
  document.getElementById('search')
)




