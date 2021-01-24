import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from 'technical/routes';
import PersonList from '../Person/pages/personList';
import Details from '../Person/pages/details';

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={routes.personList} component={PersonList}/>
        <Route path={routes.personDetails} component={Details}/>
        <Redirect to={routes.personList}/>
      </Switch>
    </BrowserRouter>
  )
}