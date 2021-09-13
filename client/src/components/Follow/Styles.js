import styled from "styled-components";

// Icons
import Add from "@material-ui/icons/PersonAdd";
import Delete from "@material-ui/icons/PersonAddDisabled";

export const FollowButton = styled(Add)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;

export const UnfollowButton = styled(Delete)`
  width: 30px !important;
  height: 30px !important;
  color: white;
`;
