import { Box } from "@mui/material";
import InputBar from "./components/InputBar";
import TextContent from "./components/TextContent";
import WordsList from "./components/WordsList";

const App = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
        <Box
          width={"25vw"}
          height={"250px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"start"}
        >
          <InputBar />
          <WordsList />
        </Box>
        <TextContent />
      </Box>
    </Box>
  );
};

export default App;
