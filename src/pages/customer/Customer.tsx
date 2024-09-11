import UserIP from "../components/UserIp";
import UserLocationMap from "../components/UserLocationMap";

const Customer = () => {
  return (
    <div>
      <p className="flex justify-center my-4 text-3xl font-bold">
        Customer Page
      </p>
      <UserIP />
      <UserLocationMap />
    </div>
  );
};

export default Customer;
