import { Autocomplete, Box, Button, TextField, styled } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const CustomGrid = styled(Grid)(() => ({
  alignItems: "center",
}))

export const Header: React.FC = () => {
  return (
    <header>
      <Box
        sx={{
          flexGrow: 1,
          border: "solid",
        }}
      >
        <CustomGrid container spacing={2}>
          <CustomGrid xs={3}>
            <h1>Games Checklist</h1>
          </CustomGrid>
          <CustomGrid xs={3}>
            <Autocomplete
              sx={{ width: 300 }}
              options={["Elden Ring", "Skyrim", "Fallout 4"]}
              renderInput={(params) => <TextField {...params} label="Games" />}
            />
          </CustomGrid>
          <CustomGrid xs={3}>
            <Button variant="text">News</Button>
          </CustomGrid>
          <CustomGrid xs={3}>
            <Button variant="text">Community</Button>
          </CustomGrid>
        </CustomGrid>
      </Box>
    </header>
  )
}
