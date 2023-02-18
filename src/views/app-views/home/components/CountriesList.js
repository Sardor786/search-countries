import React from "react";
import Card from "@mui/material/Card";

export default function CountriesList({ countries = [], loading }) {
	if (loading) return <h2 className="text-center">Loading...</h2>;

	return (
		<div className="countries_list">
			{countries.length > 0 ? (
				countries.map((country) => {
					return (
						<Card
							className="countries_list-item"
							key={country.code}
							variant="outlined"
						>
							<div className="countries_list-content">
								<div className="countries_list-header">
									<div className="countries_list-emoji">
										<span>{country.emoji}</span>
									</div>
									<div className="countries_list-names">
										<p>{country.name}</p>
										<p>{country.capital}</p>
									</div>
									<div className="countries_list-continent">
										<p>{country.continent.name}</p>
									</div>
								</div>
								<div className="countries_list-footer">
									<p>📞 +{country.phone}</p>
									<p>💱 {country.code}</p>
									<div className="countries_list-languages">
										<span>🗣</span>
										{country.languages.map((lang) => {
											return (
												<span key={lang.name}>
													{lang.native}
												</span>
											);
										})}
									</div>
								</div>
							</div>
						</Card>
					);
				})
			) : (
				<p className="text-center">Empty</p>
			)}
		</div>
	);
}
