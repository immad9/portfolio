import { Box } from "@mui/material";
import { useMyContext } from "../hooks/MyContext";

const ToggleButton = () => {
  const { toggleTheme, theme } = useMyContext();
  const checked = theme === "dark";

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Switch Wrapper */}
      <Box
        onClick={handleToggle}
        sx={{
          backgroundColor: checked ? "hsl(198,90%,15%)" : "hsl(48,90%,85%)",
          borderRadius: "20px",
          width: "60px",
          height: "25px",
          display: "flex",
          alignItems: "center",
          padding: "0.25em",
          position: "relative",
          cursor: "pointer",
          transition: "0.3s ease-in-out",
        }}
      >
        {/* Switch Knob */}
        <Box
          sx={{
            backgroundColor: checked ? "hsl(198,90%,55%)" : "hsl(48,100%,50%)",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            position: "absolute",
            left: checked ? "calc(100% - 1.5em - 0.25em)" : "0.25em",
            // bottom: "2px",
            transition: "0.3s ease-in-out",
          }}
        />

        {/* Icon (Sun / Moon Effect) */}
        <Box
          sx={{
            position: "absolute",
            top: "5px",
            left: checked ? "2.2em" : "0.6em",
            width: "25px",
            height: "25px",
            transition: "0.4s",
          }}
        >
          {/* Sun / Moon center */}
          <Box
            sx={{
              borderRadius: "50%",
              boxShadow: checked
                ? "0.2em -0.2em 0 0.2em white inset"
                : "0.4em -0.4em 0 0.5em white inset",
              width: "1em",
              height: "1em",
              position: "absolute",
              top: checked ? "3.5px" : "4px",
              left: checked ? "10px" : "-1px",
              transform: checked ? "scale(1)" : "scale(0.5)",
              transition: "0.4s ease-in-out",
            }}
          />

          {/* Rays (hidden when dark mode) */}
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "white",
                borderRadius: "0.05em",
                width: "2px",
                height: "3px",
                position: "absolute",
                top: "50%",
                left: "6.5px",
                transformOrigin: "50% 0",
                transform: `rotate(${i * 45}deg) translateY(${
                  checked ? "0.8em" : "0.45em"
                })`,
                opacity: checked ? 0 : 1,
                transition: "0.4s ease-in-out",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ToggleButton;
