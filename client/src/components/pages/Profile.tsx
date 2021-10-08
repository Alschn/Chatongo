import { FC } from "react";
import { useParams } from "react-router";
import useWebSocket, { ReadyState } from "react-use-websocket";

interface ProfileParams {
  profile_id: string;
}

const Profile: FC = () => {
  const { profile_id } = useParams<ProfileParams>();

  return <div>Profile page {profile_id}</div>;
};

export default Profile;
