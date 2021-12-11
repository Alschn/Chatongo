import {FC} from "react";
import {useParams} from "react-router";
import {Box, Link} from "@chakra-ui/react";

interface ProfileParams {
  profile_id: string;
}

const Profile: FC = () => {
  const {profile_id} = useParams<ProfileParams>();

  return <Box>
    <Link href="/#">Home</Link>
    Profile page {profile_id}
  </Box>;
};

export default Profile;
