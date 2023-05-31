import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Header, Space, AppCard } from "comp"
import { routePathList } from "src/config"
import { fetchStudents } from "src/api"

const Admin = () => {
	const navigate = useNavigate()
	const [students, setStudents] = useState([])
	const [loading, setLoading] = useState(true)
	const handleClick = (student) => () => {
		navigate(routePathList.view, { state: student })
	}

	useEffect(() => {
		fetchStudents()
			.then(students => {
				setStudents(students)
				setLoading(false)
			})
	}, [])

	return (
		<>
		<Container>
			<Header />
			<Space h="6rem" />
			<Section>
				<Main>
					<Title>Admission files control page</Title>
					<Space h="2rem" />
					<AppList>
						{loading ? <Loading>Loading...</Loading> :
							students.length == 0 ?
								<Nothing>No application is submitted</Nothing> :
							students.map(student =>
							<AppCard key={student.name} student={student}
								onClick={handleClick(student)} />
							)}
					</AppList>
				</Main>
			</Section>
		</Container>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;

	@media screen and (max-width: 64rem) {
		padding: 1rem;
		width: 100%;
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
`
const Main = styled.div`
	flex-grow: 1;
`
const AppList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 2rem;
	border-left: 3px solid var(--primary);
	border-radius: 4px;
`
const Loading = styled.div`
	color: #545454;
	font-size: 1.2rem;
	text-align: center;
`
const Nothing = styled.div`
	text-align: center;
	font-size: 1.5rem;
	color: var(--secondary);
`


export default Admin
