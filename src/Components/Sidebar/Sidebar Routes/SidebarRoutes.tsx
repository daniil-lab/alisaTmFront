import React from 'react';
import routes from '../../../Utils/Router/routes';
import SidebarRoute from './Sidebar Route/SidebarRoute';

import './SidebarRoutes.scss';

const SidebarRoutes: React.FunctionComponent = () => {
    return (
        <div className="sidebar-routes-block">
            <ul className="sidebar-routes-list">
                {routes.map((group) => {
                    return group.routes.map((route) => {
                        return (
                            <SidebarRoute
                                url={`${window.location.host}${route.layer}${route.url}`}
                                title={route.name}
                                icon={route.Icon}
                            />
                        );
                    });
                })}
            </ul>
        </div>
    );
};

export default SidebarRoutes;
