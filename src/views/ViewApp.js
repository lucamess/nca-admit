import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { Header, Space, Row  } from "comp"
import { grades, transcriptsLink } from "src/config"

const ViewApp = () => {
	const location = useLocation()
	const student = location.state
	return (
		<>
		<Container>
			<Header />
			<Space h="6rem" />
			<Section>
				<Main>
					<Title>View student{"'"}s application</Title>
					
					<Space h="3rem" />
					<Divider />
					<Space h="2rem" />
					<Row>
						<Label>Student{"'"}s Full Name:&nbsp;</Label>
						<Text>{student.name}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Parent/Guardian 1 Full Name:&nbsp;</Label>
						<Text>{student.parent1}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Parent/Guardian 2 Full Name:&nbsp;</Label>
						<Text>{student.parent2}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Phone Number:&nbsp;</Label>
						<Text>{student.phone}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Email:&nbsp;</Label>
						<Text>{student.email}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Intended class:&nbsp;</Label>
						<Text>{grades[student.grade]}</Text>
					</Row>

					<Space h="2rem" />
					<Row>
						<Label>Transcript:&nbsp;</Label>
						<a href={transcriptsLink + student.transcript}>Download file</a>
					</Row>

					<Space h="2rem" />
					<Label>Essay:</Label>
					<Text>{student.essay}</Text>

					<Space h="2rem" />
					<Divider />
					<Space h="4rem" />
				</Main>
			</Section>
		</Container>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Section = styled.div`
	display: flex;
	margin: 0 auto;
	width: 1000px;
`
const Main = styled.div`
	flex-grow: 1;
`
const Title = styled.div`
	color: var(--primary);
	font-weight: bold;
	font-size: 1.5rem;
`
const Label = styled.div`
	font-size: 1.2rem;
	color: var(--primary);
	font-weight: bold;
`
const Text = styled.div`
	font-size: 1.2rem;
	color: #454545;
`
const Divider = styled.div`
	border-bottom: 2px solid var(--primary);
`

export default ViewApp
