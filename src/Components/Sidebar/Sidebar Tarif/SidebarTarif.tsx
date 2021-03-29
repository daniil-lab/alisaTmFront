import React from 'react';

import './SidebarTarif.scss';

const SidebarTarif: React.FunctionComponent = () => {
    return (
        <div className="sidebar-tarif-block">
            <div className="sidebar-tarif-header-block">
                <p className="sidebar-tarif-header">Тариф:</p>
                <p className="sidebar-tarif-description">Базовый</p>
            </div>

            <div className="sidebar-tarif-body">
                <p className="sidebar-tarif-status-text">
                    Использовано 122 из 150 проектов
                </p>

                <div className="sidebar-tarif-progress-bar">
                    <div className="sidebar-tarif-progress-bar active" />
                </div>
            </div>

            <div className="sidebar-tarif-footer-block">
                <p className="sidebar-tarif-footer">Информация о тарифе</p>
            </div>
        </div>
    );
};

export default SidebarTarif;
