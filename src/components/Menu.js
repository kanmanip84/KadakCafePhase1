import { Box } from "@mui/material";
import MenuSection from "./../components/MenuSection"; 
import Food from "./../components/Food"; 

const Menu = () => {
  return (
    <Box>
      {/* Video Background with Centered Menu Heading */}
      <MenuSection /> 
      
      {/* Food Menu (Images + Flip Effect) */}
      <Food />
    </Box>
  );
};

export default Menu;
