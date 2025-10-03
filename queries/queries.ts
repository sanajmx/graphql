import {gql} from "@apollo/client";


export const GET_USER_INFO = gql`
query getUserInfo {
		user{
			id
			login
			firstName
			lastName
			email
			campus
			xp: transactions_aggregate(where: { type: { _eq: "xp" }, eventId: { _eq: 20 } }) {
				aggregate {
					sum {
						amount
					}
				}
			}
		}
		level: transaction(limit: 1, order_by: { amount: desc }, where: { type: { _eq: "level" } }) {
			amount
		}
	}
`;

export const auditRatio = gql `
	query {
    user{
      id
      login
	  auditRatio
	  totalUp
	  totalDown
		}
	}
`


export const GET_PROGRESS = gql `
query GetProgress($userId: Int!) {
  progress(where: { userId: { _eq: $userId } }) {
    id
    grade
    object {
      name
      type
    }
  }
}
`

export const GET_SKILLS = gql `
query {
		transaction(where: { type: { _regex: "skill" } }) {
			amount
			type
		}
	}
`

export const GET_XP_PER_PROJECT = gql `
query {
		transaction(
			where: {
				type: { _eq: "xp" }
				_and: [
					{ path: { _like: "/bahrain/bh-module%" } }
					{ path: { _nlike: "/bahrain/bh-module/checkpoint%" } }
					{ path: { _nlike: "/bahrain/bh-module/piscine%" } }
					{ amount: { _gt: 0 } }
				]
			}
			order_by: { createdAt: desc }
		) {
			amount
			object {
				name
			}
		}
	}
`