import React from "react";
import IconDashboard from "../../assests/images/Icons/IconDashboard";
import IconP2PTransfer from "../../assests/images/Icons/IconP2PTransfer";
import IconPayments from "../../assests/images/Icons/IconPayments";
import IconReports from "../../assests/images/Icons/IconReports";
import IconSettings from "../../assests/images/Icons/IconSettings";

export const IconMap = {
    iconDashboard: <IconDashboard />,
    IconP2PTransfer: <IconP2PTransfer />,
    IconPayments: <IconPayments />,
    IconSettings: <IconSettings />,
    IconReports: <IconReports />,
}

export const Navigation = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        active: true,
        default: true,
        icon: 'iconDashboard',
        subNav: [],
    },
    {
        title: 'Manage Company',
        link: '',
        active: false,
        applicableRoles: ['PTM_ADMIN'],
        icon: 'iconDashboard',
        subNav: [
            {
                title: 'Manage Users',  
                link: '/users',
                active: false,
                applicableRoles: ['PTM_ADMIN'],
                subNav: [],
            }
        ],
    },
    {
        title: 'Payment',
        link: '',
        active: false,
        icon: 'IconPayments',
        applicableRoles: ['PTM_FUND_REQUEST', 'PTM_GET_BENEFICIARY', 'PTM_PAYOUT_RANGE'],
        subNav: [
            {
                title: 'Fund Request',
                link: '/fund-request',
                active: false,
                applicableRoles: ['PTM_FUND_REQUEST'],
                subNav: [],
            },
            {
                title: 'Beneficiary',
                link: '/beneficiary',
                active: false,
                applicableRoles: ['PTM_GET_BENEFICIARY'],
                subNav: [],
            },
            {
                title: 'Commission',
                link: '/vendor-commission',
                active: false,
                applicableRoles: ['PTM_PAYOUT_RANGE'],
                subNav: [],
            },
        ],
    },
    {
        title: 'Transaction Report',
        link: '/payout-reports',
        active: false,
        icon: 'IconReports',
        applicableRoles: ['PTM_PAYOUT_TRANSACTION'],
        subNav: [],
    },
    {
        title: 'Map Vendor QR',
        link: '/mapqr-list',
        active: false,
        applicableRoles: ['PTM_ADMIN'],
        subNav: [],
    },
    {
        title: 'Bank Entity',
        link: '/bank-entity',
        active: false,
        applicableRoles: ['PTM_ADMIN'],
        // subNav: [
        //     {
        //         title: 'Add Entity',
        //         link: '/add-entity',
        //         active: false,
        //         applicableRoles: ['PTM_ADMIN'],
        //         subNav: [],
        //     },
        //     {
        //         title: 'View Entities',
        //         link: '/view-entities',
        //         active: false,
        //         applicableRoles: ['PTM_ADMIN'],
        //         subNav: [],
        //     },
        // ],
    },
    {
        title: 'P2P Transaction',
        link: '/p2p-transaction',
        active: false,
        icon: 'IconP2PTransfer',
        applicableRoles: ['PTM_VENDOR', 'PTM_ADMIN'],
        subNav: [],
    },
    {
        title: 'Settings',
        link: '/settings',
        active: false,
        default: true,
        icon:'IconSettings',
        subNav: [],
    },
]