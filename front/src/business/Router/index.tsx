import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from 'technical/routes';
import PersonList from '../Person/pages/personList';

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={routes.personList} component={PersonList}/>
        <Route path={routes.personDetails} component={() => <p>details</p>}/>
        <Redirect to={routes.personList}/>
      </Switch>
    </BrowserRouter>
  )
}