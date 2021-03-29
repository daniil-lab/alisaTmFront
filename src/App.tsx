import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Pages/Projects/Projects';
// import Main from './Layouts/Main/Main';
// import Projects from './Pages/Projects/Projects';
import routes from './Utils/Router/routes';

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
                {routes.map((group) => {
                    return (
                        <Route path={group.url} exact>
                            <group.component>
                                <Switch>
                                    {group.routes.map((route) => (
                                        <Route
                                            path={`${route.layer}${route.url}`}
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </group.component>
                        </Route>
                    );
                })}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
