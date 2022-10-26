import { Box } from "@material-ui/core"
import styled from "styled-components"

export const HeaderMenu = styled(Box)`
    width: 100%;
    padding: 0.5rem 4rem;
    background: #c4161c;
    display: block;
    position: sticky;
    top: 0;
    z-index: 10002;

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
        border: 2px solid #151515;
        background: #181818;
        border-radius: 50%;
        height: 85px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s;
    }

    .logo__container:hover {
        opacity: 0.95;
    }

    .logo-brand {
        height: 115px;
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
