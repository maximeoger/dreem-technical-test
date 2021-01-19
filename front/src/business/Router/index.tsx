import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from 'technical/routes';
import List from '../Person/pages/list';

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={routes.personList} component={List}/>
        <Route path={routes.personDetails} component={() => <p>details</p>}/>
        <Redirect to={routes.personList}/>
      </Switch>
    </BrowserRouter>
  )
}