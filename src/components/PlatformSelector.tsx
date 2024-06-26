import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platform-service";

interface Props {
  onSelectedPlatform: (platform: Platform | null) => void;
}

function PlatformSelector({ onSelectedPlatform }: Props) {
  const { platforms } = usePlatforms();

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel id="platform-label">Platform</InputLabel>
      <Select labelId="platform-label" label="Platform">
        <MenuItem
          value="all"
          defaultChecked
          onClick={() => onSelectedPlatform(null)}
        >
          All Platforms
        </MenuItem>
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
