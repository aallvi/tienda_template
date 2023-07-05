import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Typography,Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef , GridRenderCellParams} from '@mui/x-data-grid';
import NextLink from 'next/link'

const columns: GridColDef[] = [
    {field: 'id', headerName:'ID', width: 100},
    {field: 'fullname', headerName:'Nombre Completo', width: 300},
    {field:'paid', headerName:'Pagada',  description:'Muestra informacion si esta pagada la orden o no', width:200,
     renderCell: (params: GridRenderCellParams ) => {
        return (
            params.row.paid ? 
            <Chip color='success' label="Pagada" variant='outlined' />
            :
            <Chip color='error' label="No Pagada" variant='outlined' />
        )
     }
    },
    {field:'orden', headerName:'Ordenes', sortable:false , width:150, description:'Ir al link de la orden',
    renderCell: (params: GridRenderCellParams ) => {
        return (
            <NextLink href={`/orders/${params.row.id} `} passHref legacyBehavior >

                <Link underline='always' >Ver orden</Link>

            </NextLink>
        )
     }
}
    
]

const rows = [
    {id:1,paid:false, fullname:'Fernando Herrera',},
    {id:2,paid:true, fullname:'Valentina Reyes'},
    {id:3,paid:false, fullname:'Antonia Roberts'},
    {id:4,paid:true, fullname:'Esteban Flores'},
    // {id:3, fullname:'Alvaro Leiva'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title={"Historial de ordenes"} pageDescription='Historial de ordenes del cliente' >

        <Typography variant="h1" component='h1' >Historial de ordenes</Typography>

        <Grid container >
            <Grid item xs={12} sx={{height:650, width:'100%'}} >

            <DataGrid 
                rows={ rows }
                columns={ columns }
                initialState={{
                pagination: { 
                    paginationModel: { pageSize: 5 } 
                },
                }}
                pageSizeOptions={[5, 10, 25]}
                
            />

            </Grid>

        </Grid>


    </ShopLayout>
  )
}

export default HistoryPage