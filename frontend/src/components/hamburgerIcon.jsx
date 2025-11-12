import { Box } from "@mui/material";

const HamburgerIcon = ({open,setOpen}) => {
//   const [checked, setChecked] = useState(false);

  return (
    <Box
      component="div"
      onClick={() => setOpen(!open)}
      sx={{
        position: "relative",
        width: 25,
        height: 25,
        cursor: "pointer",
        display: {xs:"flex",md:"none"},
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        transition: "0.5s",
        transform: open ? "rotate(180deg)" : "none",
      }}
    >
      {/* Bar 1 */}
      <Box
        sx={{
          width: open ? "100%" : "70%",
          height: 4,
          backgroundColor: "var(--primary-color)",
          borderRadius: 4,
          position: open ? "absolute" : "static",
          transform: open ? "rotate(45deg)" : "none",
          transition: "0.5s",
        }}
      />
      {/* Bar 2 */}
      <Box
        sx={{
          width: "100%",
          height: 4,
          backgroundColor: "var(--primary-color)",
          borderRadius: 4,
          position: open ? "absolute" : "static",
          transform: open ? "scaleX(0)" : "none",
          transition: "0.5s",
        }}
      />
      {/* Bar 3 */}
      <Box
        sx={{
          width: open ? "100%" : "70%",
          height: 4,
          backgroundColor: "var(--primary-color)",
          borderRadius: 4,
          position: open ? "absolute" : "static",
          transform: open ? "rotate(-45deg)" : "none",
          transition: "0.5s",
        }}
      />
    </Box>
  );
};

export default HamburgerIcon;
