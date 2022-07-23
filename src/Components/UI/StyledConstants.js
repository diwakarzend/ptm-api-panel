import styled from 'styled-components';

export const Logo = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: ${props => props?.type == 'white' ? '#fff' : 'rgb(64, 81, 137)'};
    display: flex;
    align-items: center;
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background-color: ${props => props?.type == 'white' ? '#fff' : 'rgb(64, 81, 137)'};
        border-radius: 50%;
        color: ${props => props?.type == 'white' ? 'rgb(64, 81, 137)' :'#fff' };
        position: relative;
        margin-right: 16px;
        &:after {
            content: '';
            width: 1px;
            height: 28px;
            background-color: ${props => props?.type == 'white' ? 'var(--ip-nav-link-color)' : 'rgb(64, 81, 137)'};
            position: absolute;
            right: -8px;
            top: 0;
            bottom: 0;
            margin: auto 0;
        }
    }
    
`
export const IconRefresh = styled.i`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: solid 1px currentColor;
    border-bottom: solid 1px currentColor;
    border-left: solid 1px transparent;
    border-right: solid 1px currentColor;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 1px;
        top: 10px;
        width: 4px;
        height: 4px;
        border-top: solid 1px currentColor;
        border-left: solid 1px currentColor;
        transform: rotate(-22.5deg);
    }
`

export const TableWrapper = styled.div`
    overflow: auto;
    padding: 24px 16px;
    .table {
        width: 100%;
        color: var(--ip-body-color);
        th {
            font-weight: 600;
            text-align: left;
        }
        td, th {
            padding: 12px 10px;
            border-bottom: 1px solid var(--ip-border-color);
        }
    }
`

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 19.5px;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 8px 14px;
    font-size: 13px;
    border-radius: 4px;
    transition:  color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    &.btn-success {
        color: #fff;
        background-color: #0ab39c;
        border-color: #0ab39c;
    }
    &.btn-soft-success {
        color: #0ab39c;
        background-color: rgba(10,179,156,.1);
        border-color: rgba(10,179,156,.1);
    }
    &.btn-soft-danger {
        color: #f06548;
        background-color: rgba(240,101,72,.1);
        border-color: transparent;
    }
    .btn-danger {
        color: #fff;
        background-color: #f06548;
        border-color: #f06548;
    }
    .btn-light {
        color: #000;
        background-color: #f3f6f9;
        border-color: #f3f6f9;
    }
    .btn-sm {
        font-size: 11.375px;
        line-height: 17.0625px;
        padding: 4px 8px;
        border-radius: 3.2px;
    }
    .icon{
        width: 13px;
        height: 13px;
        display: inline-block;
        vertical-align: middle;
    }
`

export const FilterFormWrapper = styled.div`
    .form-item {
        flex: 0 0 14%;
    }
`