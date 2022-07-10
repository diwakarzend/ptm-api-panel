import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    height: 70px;
    background-color: var(--ip-white-bg);
    box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
    padding: 0 24px 0 8px;
    position: fixed;
    left: 250px;
    top: 0;
    right: 0;
    z-index: 9;
    .header-hamburger {
        border: none;
        background-color: transparent;
        padding: 16px;
        height: 100%;
        cursor: pointer;
    }
    .hamburger-icon {
        width: 20px;
        height: 14px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        span {
            background-color: var(--text-grey);
            position: absolute;
            border-radius: 2px;
            transition: .3s cubic-bezier(.8, .5, .2, 1.4);
            width: 100%;
            height: 2px;
            display: block;
            left: 0px;

            &:nth-child(1) {
                top: 0;
                width: 80%;
            }

            &:nth-child(2) {
                top: 6px;
            }

            &:nth-child(3) {
                bottom: 0;
                width: 60%;
            }
        }

        .vertical-menu-btn:hover &:not(.open) {
            span {

                &:nth-child(1) {
                    top: -1px;
                }

                &:nth-child(3) {
                    bottom: -1px;
                }
            }
        }

        &.open {
            transform: rotate(-90deg);

            span {

                &:nth-child(1) {
                    left: 1px;
                    top: 5px;
                    width: 20px;
                    transform: rotate(90deg);
                    transition-delay: 150ms;
                }

                &:nth-child(2) {
                    left: 3px;
                    top: 13px;
                    width: 10px;
                    transform: rotate(45deg);
                    transition-delay: 50ms;
                }

                &:nth-child(3) {
                    left: 9px;
                    top: 13px;
                    width: 10px;
                    transform: rotate(-45deg);
                    transition-delay: 100ms;
                }
            }
        }
    }
    .header-right {
        .user-info {
            background-color: var(--ip-topbar-user-bg);
            height: 100%;
        }
        .user-info-inner {
            padding: 19px;
            border: none;
            background: none;
        }
        .short-name {
            background-color: var(--ip-white-bg);
            color: var(--ip-heading-color);
            text-transform: uppercase;
            flex: 0 0 32px;
            width: 32px;
            height: 32px;

        }
        .user-full-name {
            color: var(--ip-heading-color);
        }
        .user-role {
            font-size: 11px;
            color: var(--text-grey);
        }
    }
`