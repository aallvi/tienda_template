import { AppBar, Link, Toolbar, Typography,Box,Button,IconButton,Badge } from "@mui/material"
import NextLink from 'next/link'
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href="/" passHref legacyBehavior>

                <Link display="flex" alignItems="center" >

                    <Typography variant="h6" color="black" >Teslo</Typography>
                    <Typography sx={{ml:0.5}} color="black" >Shop</Typography>
                    
                </Link>

            </NextLink>

            {/* todo flex */}

            <Box sx={{flex:1}} />

            
            <Box  sx={{display:{xs: 'none', sm:'block' }}} >

                <NextLink href="/category/men" passHref  legacyBehavior>
                    <Link>
                        <Button> Hombres </Button>
                    </Link>
                </NextLink>

                <NextLink href="/category/women" passHref  legacyBehavior>
                    <Link>
                        <Button> Mujeres </Button>
                    </Link>
                </NextLink>

                <NextLink href="/category/kid" passHref  legacyBehavior>
                    <Link>
                        <Button> Mujeres </Button>
                    </Link>
                </NextLink>

            </Box>

            <Box sx={{flex:1}} />

            <IconButton>
                <SearchOutlined/>
            </IconButton>


            <NextLink href="/cart" passHref  legacyBehavior>
                <Link>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary" >

                            <ShoppingCartOutlined/>

                        </Badge>
                    </IconButton>
                </Link>

            </NextLink>

            <Button>Menu</Button>

            {/* toto dlex */}

        </Toolbar>
    </AppBar>
  )
}
