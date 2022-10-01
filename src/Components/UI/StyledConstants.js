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
        transition: all .1s ease-in-out;
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
    .text {
        transition: all .1s ease-in-out;
        width: 87px;
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
            &:first-child {
                    border-left: 1px solid transparent;
                }
                &:last-child {
                    border-right: 1px solid transparent;
                }
        }
        tr.active-tr {
            td, th {
                border-top: 1px solid var(--ip-border-color);
                border-bottom: none;
                &:first-child {
                    border-left: 1px solid var(--ip-border-color);
                }
                &:last-child {
                    border-right: 1px solid var(--ip-border-color);
                }
            }
            .toggle-icon:after {
                transform: rotate(0deg);
            }
        }
        tr.sub-tr {
            td {
                background: rgb(10 179 156 / 10%);
                border-top: 1px solid var(--ip-border-color);
                &:first-child {
                    border-left: 1px solid var(--ip-border-color);
                }
                &:last-child {
                    border-right: 1px solid var(--ip-border-color);
                }
            }
        }
        .toggle-icon {
            display: inline-block;
            margin-right: 10px;
            width: 24px;
            height: 24px;
            position: relative;
            border: 1px solid var(--ip-body-color);
            border-radius: 3px;
            cursor: pointer;
            &::before, &:after {
                content: '';
                width: calc(100% - 8px);
                height: 2px;
                background-color: var(--ip-body-color);
                border-radius: 1px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                transition: transform 300ms ease-in-out;
            }
            &:after {
                transform: rotate(90deg);
            }
        }
    }
    .sub-tr-card-wrapper {
        gap: 16px;
    }
    .sub-tr-card {
        flex: 1;
        padding: 10px;
        & + .sub-tr-card {
            border-left: 1px solid rgb(10 179 156 / 30%);
        }
    }

    .sub-tr-card h4 {
        padding-bottom: 10px;
        font-size: 13px;
        text-align: center;
    }
    .sub-tr-card li {
        padding-bottom: 4px;
        display: flex;
        align-items: baseline;
    }
    .sub-tr-card strong {
        font-size: 12px;
        font-weight: 600;
        padding-right: 5px;
        white-space: nowrap;
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
    &.btn-danger {
        color: #fff;
        background-color: #f06548;
        border-color: #f06548;
    }
    &.btn-light {
        color: #000;
        background-color: #f3f6f9;
        border-color: #f3f6f9;
    }
    &.btn-sm {
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
    &.close{
        width: 10px;
        font-size: 26px;
    }
`

export const FilterFormWrapper = styled.div`
    .form-item {
        flex: 0 0 14%;
    }
`

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0,0,0,.7);
    .modal-dialog {
        position: relative;
        max-width: 500px;
        margin: 50px auto;
        transform: translateY(0);
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    }
    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: var(--ip-modal-bg);
        background-clip: padding-box;
        border: 1px solid var(--ip-border-color);
        border-radius: 8px;
        outline: 0;
    }
    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid var(--ip-border-color);
    }
    .modal-body {
        position: relative;
        flex: 1;
        padding: 20px;
    }
    .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 20px;
        border-top: 1px solid var(--ip-border-color);
    }
`

export const TooltipWrapper = styled.div`
    position: relative;
    .tooltip {
        position: absolute;
        padding: 8px 16px;
        border: 1px solid transparent;
        border-radius: 4px;
        bottom: calc(100% + 8px);
        right: 0;
        &.tooltip-success {
            color: #088675;
            background-color: #daf4f0;
            border-color: #b6e8e1;
        }
        &.tooltip-danger {
            color: #b44c36;
            background-color: #fde8e4;
            border-color: #fbd1c8;
        }
    }
`
export const AlertWrapper = styled.div`
    &.alert {
        position: relative;
        padding: 8px 16px;
        margin-bottom: 16px;
        border: 1px solid transparent;
        border-radius: 4px;
        width: fit-content;
        &.alert-normal {
            color: #2859b5;
            background-color: #e1ebfd;
            border-color: #c2d6fb;
        }   
        &.alert-success {
            color: #0ab39c;
            background-color: rgb(10 179 156 / 10%);
            border-color: rgb(10 179 156 / 15%);
        }   
        &.alert-error {
            color: rgb(211 50 65);
            background-color: rgb(211 50 65 / 10%);
            border-color: rgb(211 50 65 / 20%);
        }
        ul {
            padding-left: 5px;
            li {
                list-style-type: disc;
                & + li {
                    margin-top: 5px;
                }
            }
        }   
    }
    
`