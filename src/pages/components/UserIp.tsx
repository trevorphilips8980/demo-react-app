import axios from "axios";
import { useEffect, useState } from "react";

const UserIP = () => {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching the IP address", error);
      }
    };

    fetchIp();
  }, []);

  return (
    <h3 className="text-3xl text-center my-4">
      Your IP Address is: &nbsp;
      <b className="text-purple-700">{ip ? ip : "Loading..."}</b>
    </h3>
  );
};

export default UserIP;
