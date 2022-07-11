import styled from 'styled-components';

export const TopInfoWrapper = styled.div`
    .card {
        padding: 24px 16px;
        flex: 0 0 25%;
        & + .card {
            border-left: 1px solid var(--ip-border-color);
        }
        h5 {
            color: var(--text-grey);
            text-transform: uppercase;
            margin-bottom: 8px;
        }
        .icon {
            width: 40px;
            flex: 0 0 40px;
            height: 40px;
            margin-right: 16px;
            font-size: 32px;
        }
        strong {
            font-size: 26px;
            font-weight: 500;
            color: var(--ip-heading-color);
        }
    }
`

export const DashboardWrapper = styled.div`
    &.analysis-and-statistics {
        .transaction-analysis {
            margin-right: 24px;
            flex: 0 0 70%;
            max-width: 70%;
        }
        .overall-statistics {
            flex: 1;
            .card-body {
                padding: 10px;
            }
            .overall-chart {
                width: 180px;
                margin: 0 auto;
                padding-top: 16px;
                strong {
                    margin-left: 24px;
                }
            }
        }
    }
`