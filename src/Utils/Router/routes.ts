import React from 'react';
import {
    FaBeer,
    FaHome,
    FaFolderOpen,
    FaUsers,
    FaChartBar,
    FaChartPie,
    FaChartLine,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import Main from '../../Layouts/Main/Main';
import Projects from '../../Pages/Projects/Projects';

interface IRoute {
    name: string;
    url: string;
    exact: boolean;
    layer: string;
    component: React.FunctionComponent;
    Icon: IconType;
}

interface IRouteGroup {
    url: string;
    exact: boolean;
    routes: IRoute[];
    component: React.FunctionComponent;
}

const routes: IRouteGroup[] = [
    {
        url: '/main/:path?',
        exact: true,
        component: Main,
        routes: [
            {
                name: 'Главная',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaHome,
            },
            {
                name: 'Заявки',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaBeer,
            },
            {
                name: 'Задачи',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaFolderOpen,
            },
            {
                name: 'Задачи',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaFolderOpen,
            },
            {
                name: 'Задачи',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaFolderOpen,
            },
            {
                name: 'Задачи',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaFolderOpen,
            },
            {
                name: 'Проекты',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaFolderOpen,
            },
            {
                name: 'Люди',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaUsers,
            },
            {
                name: 'Отчеты',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaChartBar,
            },
            {
                name: 'Финансы',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaChartPie,
            },
            {
                name: 'Маркетинг',
                url: '/projects',
                layer: '/main',
                exact: false,
                component: Projects,
                Icon: FaChartLine,
            },
        ],
    },
];

export default routes;
