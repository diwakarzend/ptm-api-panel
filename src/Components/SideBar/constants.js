export const Navigation = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        active: true,
        default: true,
        subNav: [],
    },
    {
        title: 'Manage Company',
        link: '',
        active: false,
        applicableRoles: ['PTM_ADMIN'],
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
        title: 'P2P Transaction',
        link: '/p2p-transaction',
        active: false,
        applicableRoles: ['PTM_VENDOR'],
        subNav: [],
    },
    {
        title: 'Settings',
        link: '/settings',
        active: false,
        default: true,
        subNav: [],
    },
]