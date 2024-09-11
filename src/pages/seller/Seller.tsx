import UserIP from "../components/UserIp";
import UserLocationMap from "../components/UserLocationMap";

const Seller = () => {
  return (
    <div>
      <p className="flex justify-center my-4 text-3xl font-bold">Seller Page</p>
      <UserIP />
      <UserLocationMap />
    </div>
  );
};

export default Seller;
