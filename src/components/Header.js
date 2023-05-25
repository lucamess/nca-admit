import React from "react"
import styled from "styled-components"
import { FlexGrow } from "comp"

const Header = () => {
	const links = [
		["Home", "https://newaychallenge.com/index.php"],
		["About", "https://newaychallenge.com/index.php/about"],
		["Services", "https://newaychallenge.com/index.php/services/high-school"],
		["Admission", "https://newaychallenge.com/index.php/admissionn/application-process"],
		["Employment", "https://newaychallenge.com/index.php/employment"],
		["News&Events", "https://newaychallenge.com/index.php/news-events"],
		["Resources", "https://newaychallenge.com/index.php/resources"],
		["Contact", "https://newaychallenge.com/index.php/contact-us"],
	]
	return (
		<Container>
			<img src="https://newaychallenge.com/images/logo.jpg" />
			<FlexGrow />
			<Links>
				{links.map(([ label, href ]) =>
					<Link key={label} href={href}>{label}</Link>)}
			</Links>
		</Container>
	)

}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 2px solid #f5f5f5;
	box-sizing: border-box;
	height: 100px;
	width: 100%;
	align-items: center;
	padding: 1rem 4rem;
`

const Link = styled.a`
	font-size: 1.125em;
	font-weight: bold;
	color: var(--secondary);
	text-decoration: none;
`
const Links = styled.div`
	display: flex;
	gap: 2rem;
`

export default Header
