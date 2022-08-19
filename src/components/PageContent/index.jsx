import React from "react";
import { ContentContainer } from "./styles";

export default function PageContent({ children, ...props }) {
	return <ContentContainer className="pt-6">{children}</ContentContainer>;
}
