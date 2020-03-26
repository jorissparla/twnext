import Nav from "../components/nav";
import LoginForm from "../components/LoginForm";
import TenantCard from "../components/TenantCard";
import gql from "graphql-tag";
import SupportCard from "../components/SupportCard";
import { useMutation, useQuery } from "react-apollo";
import User from "../components/User";
import WithAuthentication from "../lib/withAuthentication";
console.log(
  "%c starting app",
  "color:pink;font-size:24px;text-transform:uppercase"
);

const CURRENT_USER_QUERY = gql`
  {
    me {
      id
      fullname
    }
  }
`;

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const Index = () => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  if (loading) return <div>Loading</div>;
  console.log(data);
  return (
    <div className="bg-gray-200 fixed inset-0 h-full w-full ">
      <Nav />
      <User>
        {props => {
          console.log("props", props.data);
          return <Home me={props.data} />;
        }}
      </User>
      <LoginForm />
      <SupportCard />
    </div>
  );
};

export default WithAuthentication(Index)