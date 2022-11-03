import { Box } from "@material-ui/core"
import styled from "styled-components"

export const HeaderMenu = styled(Box)`
    width: 100%;
    max-width: 100vw;
    background: #c4161c;
    display: block;
    position: sticky;
    top: 0;
    z-index: 10002;

    .header {
        display: flex;
        align-items: center;
        padding: 1rem 1.5rem;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .MuiList-padding {
        padding-bottom: 0;
        padding-top: 0;
    }

    .MuiListItem-root {
        padding-bottom: 0;
        padding-top: 0;
    }

    & ul {
        display: inline-flex;
    }

    & a {
        text-decoration: initial;
        color: #000;
        transition: all 0.25s;
    }
    & a:hover {
        color: #fff;
    }

    & a.logo {
        color: #000;
        transition: all 0.25s;
    }

    & a.logo:hover {
        transform: scale(1.05);
    }

    & a.logo:hover {
        text-decoration: initial;
        color: initial;
    }

    .logo__container {
        border-radius: 50%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s;
    }

    .logo__container:hover {
        opacity: 0.95;
    }

    .logo-brand {
        height: 100%;
        width: auto;
    }

    .logo-text {
        color: #fff;
    }

    & p {
        font-weight: bold;
        letter-spacing: 1px;
        transition: all 0.25s;
    }

    & p:hover {
        transform: scale(1.2);
    }

    .MuiTypography-h4 {
        font-weight: 500;
    }
`
export default HeaderMenu
