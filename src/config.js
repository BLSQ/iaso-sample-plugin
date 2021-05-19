import React from "react";
import App from './App';

const routes = [
    {
        label: 'TEST APP MODULE',
        baseUrl: 'plugin/list',
        permission: 'iaso_forms', // use an existing permission
        component: props => <App {...props} />,
        params: [
            {
                isRequired: false,
                key: 'order',
            },
            {
                isRequired: false,
                key: 'pageSize',
            },
            {
                isRequired: false,
                key: 'page',
            },
        ],
    },
];
const menuItems = [
    {
        label: 'Plugin List',
        permission: 'iaso_forms',
        key: 'plugin/list',
        icon: 'list',
    },
]
export {
    routes,
    menuItems,
};