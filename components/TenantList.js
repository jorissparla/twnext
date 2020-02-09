import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import TenantCard from "./TenantCard";

const ALL_TENANT_DETAILS = gql`
  query ALL_TENANT_DETAILS {
    tenants: tenantcustomerdetails {
      customer {
        name
      }
      customerid
      pm
      csm
      golivedate
      golivecomments
      tenants {
        lastupdated
        name
        farm
        version
      }
    }
  }
`;

const TenantList = () => {
  const { loading, data } = useQuery(ALL_TENANT_DETAILS);

  if (loading) return <div>Loading</div>;
  console.log(data);
  return (
    <div className="bg-gray-200 fixed inset-0 h-full w-full flex flex-wrap">
      {data.tenants.map(tenant => (
        <TenantCard details={tenant} />
      ))}
    </div>
  );
};
export default TenantList;
