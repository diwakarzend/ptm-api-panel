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
    .nav-link {
        color: var(--ip-nav-link-color);
        display: flex;
        padding: 10px 24px;
        font-size: 15px;
        line-height: 22.5px;
        text-decoration: none;
        i {
            display: inline-block;
            min-width: 28px;
            font-size: 18px;
            line-height: inherit;
        }
    }
`