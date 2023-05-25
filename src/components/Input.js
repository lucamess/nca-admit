import styled from "styled-components"

export const Input = styled.input`
	box-sizing: border-box;
	background: #fff;
	border: 2px solid #eee;
	padding: 0.7rem 1rem;
	color: #363636;
`


export const InputMultiple = styled(Input).attrs({ as: "textarea" })`
	font-family: sans-serif;
`

export const Select = styled(Input).attrs({ as: "select" })`
`

