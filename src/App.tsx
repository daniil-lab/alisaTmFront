import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Main from './Layouts/Main/Main';
// import Projects from './Pages/Projects/Projects';
import routes from './Utils/Router/routes';

const NoMatch: React.FunctionComponent = () => {
    return (
        <Redirect
            to={{
                pathname: '/main/projects',
            }}
        />
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/main/:path?" exact>
                    <Main>
                        <Switch>
                            <Route path="/main/projects" component={Projects} />
                        </Switch>
                    </Main>
                </Route> */}
                {routes.map((group, idx) => {
                    return (
                        <Route key={idx} path={group.url} exact={true}>
                            <group.component>
                                <Switch>
                                    {group.routes.map((route, key) => (
                                        <Route
                                            key={idx}
                                            path={`${route.layer}${route.url}`}
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </group.component>
                        </Route>
                    );
                })}
                <Route path="*" component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
