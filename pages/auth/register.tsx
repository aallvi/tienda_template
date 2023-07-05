import { AuthLayout } from '@/components/layouts'
import { Box, Button, Grid, TextField, Typography ,Link} from '@mui/material'
import React from 'react'
import NextLink from 'next/link';


const RegisterPage = () => {
  return (
    <AuthLayout title='Ingresar' >

        <Box sx={{width:350, padding:'10px 20px'}} >

            <Grid container spacing={2} >

                <Grid item xs={12} >

                    <Typography variant='h1' component="h1" >Registrate</Typography>

                </Grid>
                <Grid item xs={12} >

                    <TextField label="Nombre Completo" variant='filled' fullWidth />

                </Grid>
                <Grid item xs={12} >

                    <TextField label="Correo" variant='filled' fullWidth />

                </Grid>
                <Grid item xs={12} >

                    <TextField label="Contraseña" variant='filled' fullWidth type='password' />

                </Grid>
                <Grid item xs={12} >

                    <TextField label="Repetir Contraseña" variant='filled' fullWidth type='password' />

                </Grid>
                <Grid item xs={12} >

                    <Button color='secondary' className='circular-btn' size='large' fullWidth >
                        Registrarse
                    </Button>

                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent={"end"} >

                    <NextLink href={"/auth/login"} passHref legacyBehavior >
                        <Link underline='always' >
                            ¿Ya tienes cuenta? Iniciar sesion
                        </Link>

                    </NextLink>

                </Grid>

       

            </Grid>

        </Box>
         
    </AuthLayout>
  )
}

export default RegisterPage