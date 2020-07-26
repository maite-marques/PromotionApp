import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';

const Root = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route path="/create" component={PagesPromotionForm}/>
      <Route path="/edit/:id" component={PagesPromotionForm}/>
      <Route path="/" component={PagesPromotionSearch}/>
    </Switch>
  </BrowserRouter>
  );
};

export default Root;
