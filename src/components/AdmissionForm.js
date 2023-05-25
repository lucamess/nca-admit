import React, { useState } from "react"
import styled from "styled-components"
import { Input, InputMultiple, Space, Select, Button } from "comp"
import { nullFn } from "src/utils"

const AdmissionForm = ({ onSubmit = nullFn }) => {
	const [form, setForm] = useState({
		name: "", parent1: "", parent2: "",
		phone: "", email: "", grade: "9", essay: "",
		transcript: null, date: (new Date()).getTime(),
	})

	const handleText = key => e => {
		setForm(prev => ({
			...prev,
			[key]: e.target.value,
		}))
	}
	const handleFile = e => {
		console.log(e.target.files[0])
		setForm(prev => ({
			...prev,
			transcript: e.target.files[0],
		}))
	}
	const handleSave = () => {
		console.log(form)
		onSubmit(form)
	}

	
	return (
		<Container>
			<Text>Student{"'"}s Full Name</Text>
			<Space h="0.5rem" />
			<Input value={form.name} onChange={handleText("name")} width="600px" />

			<Space h="1rem" />
			<Text>Parent/Guardian 1 Full Name</Text>
			<Space h="0.5rem" />
			<Input value={form.parent1} onChange={handleText("parent1")} width="600px" />

			<Space h="1rem" />
			<Text>Parent/Guardian 2 Full Name</Text>
			<Space h="0.5rem" />
			<Input value={form.parent2} onChange={handleText("parent2")} width="600px" />

			<Space h="1rem" />
			<Text>Phone Number</Text>
			<Space h="0.5rem" />
			<Input value={form.phone} onChange={handleText("phone")} width="600px" />

			<Space h="1rem" />
			<Text>Email</Text>
			<Space h="0.5rem" />
			<Input value={form.email} onChange={handleText("email")} width="600px" />

			<Space h="1rem" />
			<Text>Intended class</Text>
			<Space h="0.5rem" />
			<Select value={form.grade} onChange={handleText("grade")} width="400px">
				<option value="9">Grade 9</option>
				<option value="10">Grade 10</option>
				<option value="11n">Grade 11 Natural</option>
				<option value="11s">Grade 11 Social</option>
				<option value="12n">Grade 12 Natural</option>
				<option value="12s">Grade 12 Social</option>
			</Select>

			<Space h="1rem" />
			<Text>Transcript</Text>
			<Space h="0.5rem" />
			<Input onChange={handleFile} type="file" />

			<Space h="2rem" />
			<Text>Essay: In less than 200 words explain why do you think you are a good fit for Neway Challenge Academy (you can mention your involvement inside and outside the classroom)</Text>
			<InputMultiple value={form.essay} onChange={handleText("essay")} rows="4" />

			<Space h="2rem" />
			<Button width="min-content" onClick={handleSave}
				style={{ alignSelf: "flex-end" }}>Submit</Button>

		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Text = styled.div`
	color: #363636;
`

export default AdmissionForm
