import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
    width: 250px;
    z-index: 99;
    background: var(--ip-vertical-menu-bg-dark);
    border-right: 1px solid var(--ip-vertical-menu-bg-dark);
    bottom: 0;
    margin-top: 0;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
    padding: 0 0 calc(70px + 25px) 0;
    transition: all .1s ease-out;
    @media (min-width: 768px) {
        &.collapsed {
            width: 50px;
            overflow: hidden;
            .logo {
                padding: 12px 8px;
                .icon {
                    &:after{
                        display: none;
                    }
                    margin-right: 0;
                    width: 33px;
                    height: 33px;
                }
                .text {
                    opacity: 0;
                    width: 0;
                }
            }
            .menu-wrapper > li > .nav-link {
                padding-left: 15px;
                padding-right: 15px;
            }
            .menu-wrapper > li > .nav-link .nav-title {
                display: none;
            }
        }
    }
    
    .logo {
        height: 70px;
        padding: 12px 24px 0;
        transition: inherit;
        margin-bottom: 30px;
        img {
            max-width: 130px;
        }
    }
    .menu-wrapper {
        max-height: calc(100vh - 100px);
        overflow: auto;
        > li {
            > .nav-link {
                display: flex;
                align-items: center;
                > .icon {
                    flex: 0 0 18px;
                    width: 18px;
                    height: 18px;
                    margin-right: 10px;
                }
            }
        }
    }
     
    .nav-link {
        color: var(--ip-nav-link-color);
        display: flex;
        padding: 10px 24px;
        font-size: 13px;
        line-height: 22.5px;
        text-decoration: none;
        cursor: pointer;
        transition: all .1s ease-in-out;
        &.active {
            color: var(--ip-vertical-menu-item-active-color-dark);
        }
        .nav-title {
            white-space: nowrap;
        }
    }
    @media screen and (max-width: 768px) {
        transform: translateX(-250px);
    }
`

export const NavItemWreapper = styled.li`
    &.has-dropdown {
        > .sub-menu-wrapper {
            padding-left: 28px;
            height: 0;
            opacity: 0;
            transition: all 300ms ease;
            overflow: hidden;
        }
        &.active {
            > .sub-menu-wrapper {
                height: calc(42.5px * ${props => props.subNavLength});
                opacity: 1;
            }
            > .nav-link {
                color: var(--ip-vertical-menu-item-active-color-dark);
            }
        }
    }
`