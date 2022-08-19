import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem, List, Typography } from "@material-ui/core";
import HeaderMenu from "./styles";

function Header() {
	// █▀▄▀█ █▀▀ ▀█▀ ▄▀█ █▀▄ ▄▀█ ▀█▀ ▄▀█
	// █░▀░█ ██▄ ░█░ █▀█ █▄▀ █▀█ ░█░ █▀█

	const headerLinks = [
		{ name: "Home", link: "/" },
		{
			name: "Filme",
			link: "/filme/1",
		},
	];

	// █░█ █▀█ █▀█ █▄▀ █▀
	// █▀█ █▄█ █▄█ █░█ ▄█

	const location = useLocation();
	const locationPath = location.pathname;

	// █▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
	// █░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
	const isActivePage = (link) => link === locationPath;

	return (
		<HeaderMenu>
			<div className="header">
				<Link to="/" className="logo">
					<Typography variant="h4">PRIME-FLIX</Typography>
				</Link>
				<List>
					{headerLinks.map((item, key) => {
						return (
							<ListItem key={key}>
								<Link
									to={item.link}
									style={
										isActivePage(item.link)
											? {
													color: "#9605c7",
											  }
											: {
													undefined,
											  }
									}
								>
									<Typography
										variant="body1"
										style={
											isActivePage(item.link)
												? { transform: "scale(1.4)" }
												: { undefined }
										}
									>
										{item.name}
									</Typography>
								</Link>
							</ListItem>
						);
					})}
				</List>
			</div>
		</HeaderMenu>
	);
}

export default Header;
