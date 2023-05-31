import React from "react"

const HamburgerIcon = ({ onClick, style }) =>
	<div onClick={onClick} style={{ fontSize: "1.5rem", cursor: "pointer", ...style }}>
		☰
	</div>

export default HamburgerIcon

