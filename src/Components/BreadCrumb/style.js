import styled from 'styled-components';

export const PageTitleWrapper = styled.div`
    padding: 10px 24px;
    margin: 0 -16px 24px;
    box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
    background-color: var(--ip-card-bg);
    h1 {
        font-weight: 700;
        font-size: 15px;
        text-transform: uppercase;
    }
    .separator {
        margin: 0 5px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start !important;
        .breadcrumb {
            margin-top: 5px;
        }
    }
`

export const BreadCrumbWrapper = styled.ol`
    a {
        color: var(--ip-link-color);
        text-decoration: none;
    }
    li {
        color: #878a99;
    }
`