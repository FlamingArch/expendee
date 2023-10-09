import { Auth } from "firebase/auth";
import { Button, Section } from "../components";
import { IconOutwardLink } from "../components/Icons";
import { useNavigate } from "react-router-dom";
import SidebarLink from "../components/SidebarLink";
import signOut from "../functions/signOut";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import fetchUserDoc from "../functions/fetchUserDoc";
import { Firestore } from "firebase/firestore";

type SidebarUserSectionProps = {
  userId: string;
  auth: Auth;
  firestore: Firestore;
};
export default function SidebarUserSection({
  userId,
  auth,
  firestore,
}: SidebarUserSectionProps) {
  const [userDoc, setUserDoc] = useState<User>();

  useEffect(() => {
    fetchUserDoc(firestore, userId).then((userDoc) => {
      if (userDoc.exists()) setUserDoc(userDoc.data() as User);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Section
      heading="User"
      padding={0}
      gap={4}
      actions={
        <Button
          buttonStyle="actionSidebar"
          label="Sign Out"
          Icon={IconOutwardLink}
          onClick={() => {
            signOut(auth);
            navigate("/signin");
          }}
        />
      }
    >
      <Button
        buttonStyle="primary"
        className="p-4"
        label={
          <>
            Signed In as{" "}
            <span className="font-bold">{userDoc?.userName ?? "User"}</span>
          </>
        }
      />
    </Section>
  );
}
