import React from 'react'
import gql from 'graphql-tag'
import { Query } from "react-apollo";

const CURRENT_USER_QUERY = gql`
{
    me {
      id
      fullname
    }
}
`



const User = ({children}) => {
    console.log('children', children)
    
    return (
    <Query  query={CURRENT_USER_QUERY}>
      {payload => children(payload)}
    </Query>
  )};
  export default User