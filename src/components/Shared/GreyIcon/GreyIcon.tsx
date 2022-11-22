import type { FC } from "react";
import { useTheme } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import type { IconProps } from "@mui/material/Icon";

const IconComponent: FC = (props: IconProps) => {
  const theme = useTheme();

  return (
    <Icon
      sx={{
        color: theme.palette.common.black,
        opacity: theme.extra.icon.transparency,
      }}
      {...props}
    />
  );
};

export default IconComponent;
