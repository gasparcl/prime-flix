import { Box } from "@material-ui/core";
import styled from "styled-components";

export const HeaderMenu = styled(Box)`
    width: 100%;
    padding: 1.5rem 3rem;
    background: linear-gradient(
        270deg,
        rgba(180, 0, 0, 0.9),
        rgba(150, 0, 0, 1)
    );

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & ul {
        display: inline-flex;
        margin-right: 2rem;
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
        margin-left: 2rem;
        font-weight: 500;
    }
`;
export default HeaderMenu;
