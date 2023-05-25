import React from "react"
import styled from "styled-components"
import { Space, Row, FlexGrow } from "comp"
import { dateToHuman } from "src/utils"
import { grades } from "src/config"

const AppCard = ({ student, onClick }) => {
	return (
		<Container onClick={onClick}>
			<Row>
				<Title>{student.name}</Title>
				<FlexGrow />
				<Text>{dateToHuman(Number(student.date))}</Text>
			</Row>
			<Space h="0.5rem" />
			<Subtitle>For {grades[student.grade]}</Subtitle>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid var(--primary-light);
	padding: 1rem;
	width: 600px;
	cursor: pointer;
`

const Title = styled.div`
	font-size: 1.3rem;
	color: #242424;
`
const Subtitle = styled.div`
	font-size: 1.1rem;
	color: #454545;
`
const Text = styled.div`
	color: #636363;
`

export default AppCard
