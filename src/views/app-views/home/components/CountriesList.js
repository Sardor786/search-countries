import React from "react";
import Card from "@mui/material/Card";

export default function CountriesList({ countries = [], loading }) {
	if (loading) return <h2 className="text-center">Loading...</h2>;

	return countries.length > 0 ? (
		countries.map((country) => {
			return (
				<Card key={country.code} variant="outlined">
					<div>
						<p>{country.emoji}</p>
						<p>{country.name}</p>
						<p>{country.capital}</p>
						<p>{country.continent.name}</p>
						<p>{country.phone}</p>
						<p>{country.code}</p>
					</div>
				</Card>
			);
		})
	) : (
		<p className="text-center">Empty</p>
	);
}
