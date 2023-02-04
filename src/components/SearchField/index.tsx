import TextField from "@/src/common-ui/TextField";
import { Search } from "@mui/icons-material";
import { FormControl } from "@mui/material";
import { useRouter } from "next/router";
import { useRef } from "react";

const SearchField = () => {
  const router = useRouter();
  const inputRef = useRef<any>();

  return (
    <FormControl
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?q=${inputRef.current?.value}`);
      }}
    >
      <TextField
        inputRef={inputRef}
        fullWidth
        sx={{ flex: 1, width: "100%", ml: 2, minWidth: "260px" }}
        icon={<Search />}
        onClickIcon={() => router.push(`/search?q=${inputRef.current?.value}`)}
        placeholder="Tìm kiếm"
        type="input"
      />
    </FormControl>
  );
};

export default SearchField;
