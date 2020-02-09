import Nav from "../components/nav";
import LoginForm from "../components/LoginForm";
import TenantCard from "../components/TenantCard";
import SupportCard from "../components/SupportCard";

export default () => (
  <div className="bg-gray-200 fixed inset-0 h-full w-full ">
    <Nav />
    <LoginForm />
    <SupportCard />
    <div className="flex flex-wrap">
      <TenantCard />
      <TenantCard />
      <TenantCard />
      <TenantCard />
    </div>
  </div>
);
