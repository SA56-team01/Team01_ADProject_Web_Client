import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

type Props = {
  user_id: number;
  playlist_id: number;
  location: string;
  timestamp: string;
  icon?: React.ReactNode;
};

const UserPlayListCardHeader = ({
  user_id,
  playlist_id,
  location,
  timestamp,
  icon,
}: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {user_id}
          </Typography>
          <Typography variant="h6">{playlist_id}</Typography>
          <Typography variant="h6">{location}</Typography>
          <Typography variant="h6">{timestamp}</Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default UserPlayListCardHeader;
