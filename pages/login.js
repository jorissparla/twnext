import React, { useState } from "react";
import gql from "graphql-tag";
import Router from 'next/router'
// import Cookie from "js-cookie";
import cookies  from 'nookies'
import { useMutation, useQuery } from "react-apollo";

const LOGIN_MUTATION = gql`
  mutation SIGNIN_MUTATION {
    signinUser(
      input: { email: "joris.sparla@infor.com", password: "Infor2019" }
    ) {
      user {
        email
        fullname
      }
      token
    }
  }
`;

const CURRENT_USER_QUERY = gql`
  {
    me {
      id
      fullname
    }
  }
`;

export default function login() {
  const [login] = useMutation(LOGIN_MUTATION);
const [name, setName] = useState('Nobody Logged in')
  async function handleLogin() {
    const res = await login();
    cookies.set(null, "token", res.data.signinUser.token);
    console.log("res", res);
    Router.push('/')
  }
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
   React.useEffect(()=> {

   }, [loading]) 
  if (loading) {
    return <div>Spinner</div>;
  }
  console.log(data)
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>{name}</div>
    </div>
  );
}
