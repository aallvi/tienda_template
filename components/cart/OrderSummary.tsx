import { Divider, Grid, Typography } from "@mui/material"








export const OrderSummary = () => {


  return (

    <Grid container >

        <Grid item xs={6} >

            <Typography> No. Productos </Typography>

        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end' >

            <Typography> 3 items </Typography>

        </Grid>

        <Grid item xs={6}  >

            <Typography> SubTotal </Typography>

        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' >

            <Typography> $155.42 </Typography>

        </Grid>

        <Grid item xs={6}  >

            <Typography> Impuestos (%15) </Typography>

        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' >

            <Typography> $20.23 </Typography>

        </Grid>

        <Grid>


        </Grid>

        <Grid item xs={6} sx={{mt:3}}  >

            <Typography>  Total: </Typography>

        </Grid>
        <Grid item xs={6} sx={{mt:3}} display='flex' justifyContent='end' >

            <Typography variant="subtitle1" > $175.65 </Typography>

        </Grid>

    </Grid>
  )

}
