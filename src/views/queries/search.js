import { gql } from "@apollo/client";

const SEARCH_COUNTRY = gql`
	query countries($eq: String!) {
		countries: countries(filter: { code: { eq: $eq } }) {
			code
			name
			native
			phone
			capital
			currency
			languages {
				name
				native
				rtl
			}
			continent {
				name
			}
			emoji
			states {
				name
			}
		}
	}
`;

export { SEARCH_COUNTRY };
