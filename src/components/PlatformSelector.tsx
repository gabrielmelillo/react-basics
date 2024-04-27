import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platform-service";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectedPlatform }: Props) {
  const { platforms } = usePlatforms();

  return (
    <FormControl sx={{ marginBottom: 5, minWidth: 150 }}>
      <InputLabel id="platform-label">Platform</InputLabel>
      <Select labelId="platform-label" label="Platform">
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PlatformSelector;
