import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";

interface Option {
  key: string;
  value: string;
}

interface IProps {
  searchLabel: string;
  loading: boolean;
  error: Error | undefined;
  noOptionsText: string;
  options: Option[];
  optionSelector: string;
  onInputChange?: (searchInput: string) => void;
  onChange?: (selectedInput: string) => void;
}

const SearchAutocomplete = ({
  searchLabel,
  loading,
  error,
  options = [],
  optionSelector,
  noOptionsText,
  onInputChange,
  onChange,
}: IProps) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="autocomplete"
        loading={!error && loading}
        filterOptions={(x) => x}
        disableClearable
        noOptionsText={noOptionsText}
        onChange={(e, v) => onChange && onChange(v)}
        onInputChange={(e, v) => onInputChange && onInputChange(v)}
        options={options?.map(
          (option) => option[optionSelector as keyof Option]
        )}
        renderInput={(params) =>
          error ? (
            <TextField
              error={true}
              helperText={error.message}
              {...params}
              label="Error"
              variant="outlined"
            />
          ) : (
            <TextField
              {...params}
              label={searchLabel}
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: <SearchIcon />,
              }}
            />
          )
        }
      />
    </Stack>
  );
};

export default SearchAutocomplete;
