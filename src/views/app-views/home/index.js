import React from "react";
import { useQuery } from "@apollo/client";

import { SEARCH_COUNTRY } from "../../queries/search";
import { debounce } from "../../helpers/debounce";
import { useFilter } from "../context/homeContext";
import { transliterate } from "../../helpers/transliterate";

import CountriesList from "./components/CountriesList";
import SearchInput from "./components/SearchInput";

export default function Home() {
	const [filter, setFilter] = useFilter();

	const { data, loading } = useQuery(SEARCH_COUNTRY, {
		variables: { eq: filter.countryCode },
	});

	const changeCode = (value) => {
		value = transliterate(value);
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

				<SearchInput onChange={changeCode} />
				<CountriesList
					loading={loading}
					countries={data ? data.countries : []}
				/>
			</div>

			<div className="link">
				by{" "}
				<a target={"blank"} href="https://t.me/sardor_shodmonov">
					Sardor Shodmonov
				</a>
			</div>
		</div>
	);
}
