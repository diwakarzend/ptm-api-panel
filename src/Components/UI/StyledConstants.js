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