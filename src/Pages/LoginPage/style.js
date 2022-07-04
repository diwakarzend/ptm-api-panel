import styled from 'styled-components'; 

export const LoginFormWrapper = styled.div`
    .login-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 380px;
        &:before {
            content: '';
            background: linear-gradient(to right,#364574,#405189);
            opacity: 0.9;
            position: absolute;
            height: 100%;
            width: 100%;
            right: 0;
            bottom: 0;
            left: 0;
            top: 0;
        }
    }
    .form-heading {
        color: var(--ip-white-color);
        padding: 48px 16px;
        p {
            margin: 16px 0;
            color: rgba(255,255,255,.5);
        }
    }
    .login-form {
        position: relative;
        z-index: 2;
    }
    .login-form-inner {
        max-width: 475px;
        padding: 24px;
        margin: 0 auto;
        box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
        background-color: var(--ip-white-bg);
        border-radius: 5px;
    }
    .logo-icon {
        max-width: 200px;
    }
    .logo-wrapper {
        p {
            color: var(--text-grey);
        }
    }
`;