import React from "react"
import styled from "styled-components"
import { Header, Socials, Space, AdmissionForm, Footer } from "comp"
import { Notyf } from "notyf"
import "notyf/notyf.min.css"
import { sendForm } from "src/api"

const Home = () => {
	const handleSubmit = (form) => {
		const notyf = new Notyf({ ripple: true })
		notyf.success("Uploading form...")
		sendForm(form)
			.then(() => {
				notyf.success("Application submitted successfully")
			})
			.catch(err => {
				console.log("sendForm error", err)
				notyf.error("Please check your internet connection")
			})
	}

	return (
		<>
		<Container>
			<Header />
			<Space h="6rem" />
			<Section>
				<Sidebar>
					<Socials />
					<Space h="1rem" />
				</Sidebar>
				<Main>
					<Title>Application Process</Title>
					<Space h="2rem" />
					<AdmissionForm onSubmit={handleSubmit} />
					<Space h="4rem" />
				</Main>
			</Section>
		</Container>
		<Footer>© Copyright © 2011-2023 Neway Challenge Academy</Footer>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 64rem) {
		width: 100%;
		padding: 2rem;
	}
`
const Title = styled.div`
	color: var(--primary);
	font-weight: bold;
	font-size: 1.5rem;
`
const Section = styled.div`
	display: flex;
	margin: 0 auto;
	width: 1000px;

	@media screen and (max-width: 64rem) {
		width: 100%;
		flex-direction: column;
	}
`
const Sidebar = styled.div`
	width: 20%;
`
const Main = styled.div`
	flex-grow: 1;
`

export default Home
