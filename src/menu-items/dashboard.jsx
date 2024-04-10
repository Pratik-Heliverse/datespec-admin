// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons-react';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics: IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        // {
        //     id: 'default',
        //     title: <FormattedMessage id="default" />,
        //     type: 'item',
        //     url: '/dashboard/default',
        //     icon: icons.IconDashboard,
        //     breadcrumbs: false
        // },
        {
            id: 'statistics',
            title: <FormattedMessage id="statistics" />,
            type: 'item',
            url: '/dashboard/statistics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
        // {
        //     id: 'analytics-2',
        //     title: <FormattedMessage id="analytics-2" />,
        //     type: 'item',
        //     url: '/dashboard/analytics-2',
        //     icon: icons.IconDeviceAnalytics,
        //     breadcrumbs: false
        // }
    ]
};

export default dashboard;
