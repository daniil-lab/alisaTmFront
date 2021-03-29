import React from 'react';
import SidebarNotification from './Sidebar Notification/SidebarNotification';

import './SidebarNotifications.scss';

const SidebarNotifications: React.FunctionComponent = () => {
    return (
        <div className="sidebar-notifications-block">
            <div className="sidebar-notifications-header-block">
                <p className="sidebar-notifications-header">Важные события:</p>
            </div>
            <SidebarNotification text="У вас новая заявка!" />
            <SidebarNotification text="У вас новые исполнители!" />
            <SidebarNotification
                description="1010-74"
                text="Новые файлы от 
                переводчика"
            />
        </div>
    );
};

export default SidebarNotifications;
