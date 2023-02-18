import { OutlinedInput } from "@mui/material";
import React from "react";

export default function SearchInput({ onChange }) {
	return (
		<OutlinedInput
			color="primary"
			className="mb-1 w-100"
			placeholder="Search country with code..."
			defaultValue={"uz"}
			onChange={(e) => onChange(e.target.value.trim())}
		/>
	);
}
