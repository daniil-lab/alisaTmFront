import React from 'react';

import './SidebarNotification.scss';

interface ISidebarNotification {
    text: string;
    description?: string;
}

const SidebarNotification: React.FunctionComponent<ISidebarNotification> = ({
    text,
    description,
}) => {
    return (
        <div className="sidebar-notification-block">
            {description ? (
                <p className="sidebar-notification-description">
                    {description}
                </p>
            ) : null}
            <p className="sidebar-notification-text">{text}</p>
        </div>
    );
};

export default SidebarNotification;
