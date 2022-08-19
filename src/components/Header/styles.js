import { Box } from "@material-ui/core";
import styled from "styled-components";

export const HeaderMenu = styled(Box)`
	width: 100%;
	padding: 1.5rem 3rem;
	background: linear-gradient(
		to right,
		rgba(0, 122, 144, 0.3),
		rgba(0, 122, 144, 0.8)
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
		color: #01f;
		transition: all 0.2s;
	}
	& a:hover {
		color: #9605c7;
	}

	& a.logo {
		color: #000;
		transition: all 0.3s;
	}

	& a.logo:hover {
		transform: scale(1.1);
	}

	& a.logo:hover {
		text-decoration: initial;
		color: initial;
	}

	& p {
		font-weight: bold;
		transition: all 0.25s;
		letter-spacing: 1px;
	}

	& p:hover {
		transform: scale(1.4);
	}

	.MuiTypography-h4 {
		margin-left: 2rem;
		font-weight: 500;
	}
`;
export default HeaderMenu;
