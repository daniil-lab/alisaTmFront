import React from 'react';
import { IconType } from 'react-icons/lib';
import { FaChevronRight } from 'react-icons/fa';

import './SidebarRoute.scss';

interface ISidebarRoute {
    title: string;
    url: string;
    children?: React.ReactNode;
    icon: IconType;
}

const SidebarRoute: React.FunctionComponent<ISidebarRoute> = ({
    title,
    url,
    children,
    icon,
}) => {
    const Icon = icon;

    return (
        <>
            <li className="sidebar-route">
                <div className="sidebar-route-active-border" />

                <div className="sidebar-route-icon-block">
                    <Icon className="sidebar-route-icon" />
                </div>

                <div className="sidebar-route-name-block">
                    <a href={url} className="sidebar-route-name">
                        {title}
                    </a>
                </div>

                <div className="sidebar-route-collapsed-block">
                    <FaChevronRight className="sidebar-route-collapsed-icon" />
                </div>

                {children}
            </li>
        </>
    );
};

export default SidebarRoute;
