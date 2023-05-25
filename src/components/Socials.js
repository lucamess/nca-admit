import React from "react"
import styled from "styled-components"
import { Space } from "comp"
import TwitterIcon from "src/icons/Twitter"
import LinkedinIcon from "src/icons/Linkedin"
import InstagramIcon from "src/icons/Instagram"
import FacebookIcon from "src/icons/Facebook"

const Socials = () => {
	return (
		<Container>
			<Text>Share</Text>
			<FacebookIcon />
			<TwitterIcon />
			<InstagramIcon />
			<LinkedinIcon />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	color: var(--gray);
	align-items: center;
	width: min-content;
`
const Text = styled.div`
	margin-bottom: 0.5rem;
	font-weight: bold;
`

export default Socials
