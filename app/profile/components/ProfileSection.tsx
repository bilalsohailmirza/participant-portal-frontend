import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileSection = ({ token }: { token: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  useEffect(() => {
    const fetchPersonalData = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/users/getPersonalData`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data) {
        setName(result.data.fullName);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setOrganization(result.data.organization);
      }
    };
    fetchPersonalData();
  }, []);

  return (
    <div className="w-[50%] p-5">
      <Label className="text-md">Full Name</Label>
      <Input placeholder={name}></Input>
      <Label className="text-lg">Email</Label>
      <Input placeholder={email}></Input>
      <Label className="text-lg">Phone</Label>
      <Input placeholder={phone}></Input>
      <Label className="text-lg">Organization</Label>
      <Input placeholder={organization}></Input>
    </div>
  );
};

export default ProfileSection;
