import React from "react";
import { OutlinedInput } from "@mui/material";
import CountriesList from "./components/CountriesList";
import { useQuery } from "@apollo/client";
import { SEARCH_COUNTRY } from "../../queries/search";
import { debounce } from "../../helpers/debounce";
import { useFilter } from "../context/homeContext";

export default function Home() {
	const [filter, setFilter] = useFilter();

	const { data, loading } = useQuery(SEARCH_COUNTRY, {
		variables: { eq: filter.countryCode },
	});

	const changeCode = (value) => {
		debounce(
			() => setFilter({ ...filter, countryCode: value.toUpperCase() }),
			"changeCode",
			500
		);
	};

	return (
		<div className="home">
			<div className="container">
				<h1 className="text-center">Search Countries</h1>

				<OutlinedInput
					color="primary"
					className="mb-1 w-100"
					placeholder="Search country with code..."
					defaultValue={"uz"}
					onChange={(e) => changeCode(e.target.value.trim())}
				/>

				<CountriesList
					loading={loading}
					countries={data ? data.countries : []}
				/>
			</div>
		</div>
	);
}
