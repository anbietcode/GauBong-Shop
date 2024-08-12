import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: -3 ,ml: 2 },
      }}
    >
      <Typography component="legend"><strong>Rating</strong></Typography>
      <Rating
        name="simple-controlled"
        style={{marginLeft:10+"px"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
       <img className='addtocartimg' src={require("./add-to-cart.png")} />
    </Box>

  );
}