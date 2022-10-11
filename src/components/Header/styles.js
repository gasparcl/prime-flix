import { Box } from "@material-ui/core"
import styled from "styled-components"

export const HeaderMenu = styled(Box)`
    width: 100%;
    padding: 0 4rem;
    background: #c4161c;
    display: block;
    position: sticky;
    top: 0;
    z-index: 999;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & ul {
        display: inline-flex;
    }

    & li {
        margin: 1rem 0.5rem;
    }

    & a {
        text-decoration: initial;
        color: #000;
        transition: all 0.2s;
    }
    & a:hover {
        color: #fff;
    }

    & a.logo {
        color: #000;
        transition: all 0.35s;
    }

    & a.logo:hover {
        transform: scale(1.15);
    }

    & a.logo:hover {
        text-decoration: initial;
        color: initial;
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
        transform: scale(1.6);
    }

    .MuiTypography-h4 {
        font-weight: 500;
    }
`
export default HeaderMenu
