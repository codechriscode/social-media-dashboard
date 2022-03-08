import Toggle from "./atoms/Toggle";
import Typography from "./atoms/Typography";

import mock from "../mock/payload.json";

export default function Dashboard() {

  return (
    <>
      <Toggle />
      <Typography variant="title">Social Media Dashboard</Typography>
      <Typography variant="subtitle">Total views: 23406</Typography>
      <Typography variant="title2">Overview - Today</Typography>
      <Typography variant="profile-name">@nathanf</Typography>
      <Typography variant="spotlight-num">1995</Typography>
      <Typography variant="spaced-caps">followers</Typography>
      <Typography variant="change-text">3%</Typography>
    </>
  );
}
