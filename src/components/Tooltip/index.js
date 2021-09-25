import { Tooltip, styled } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";

const MyTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.warning[theme.mode],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.warning[theme.mode],
  },
}));

export default MyTooltip;
