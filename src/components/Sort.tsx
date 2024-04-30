import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export interface SortOption {
  id: string;
  name: string;
}

interface Props {
  onSelectedSort: (sortOption: SortOption | null) => void;
}

function Sort({ onSelectedSort }: Props) {
  const sortOptions: SortOption[] = [
    { id: "", name: "Relevance" },
    { id: "-added", name: "Date added" },
    { id: "name", name: "Name" },
    { id: "-released", name: "Date released" },
    { id: "-metacritic", name: "Metacritic score" },
    { id: "rating", name: "Average rating" },
  ];

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel id="platform-label">Order By</InputLabel>
      <Select labelId="platform-label" label="Order by:">
        {sortOptions.map((option) => (
          <MenuItem
            key={option.id}
            value={option.name}
            onClick={() => onSelectedSort(option)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Sort;
