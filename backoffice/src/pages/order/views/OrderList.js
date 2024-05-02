
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '../../../componenets/Autocomplete';
import { FcFullTrash } from "react-icons/fc";
import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux"
import { getcategories } from '../../../store/category';
export default function CategoryList() {

    const categories = useSelector((state) => state.category?.categories)
    const [rows, setRows] = useState([])
    console.log(categories, "categ");
    const dispatch = useDispatch()
    // React.useEffect(() => {
    //     dispatch(getcategories())

    // }, [])
    // React.useEffect(() => {

    //     setRows(categories)
    // }, [rows])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'order number',
            headerName: 'order number',
            width: 150,
            editable: true,
        },
        {
          field: 'price',
          headerName: 'price',
          width: 150,
          editable: true,
      },
      // {
        //     field: 'SubCategories',
        //     headerName: 'SubCategories',
        //     width: 200,
        //     editable: true,
        //     valueGetter: (value,row) => {
                
        //         return row.subcategory.map((elem) => (
        //             elem.name
        //         )).join(", ");
        //     }
        // },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            getActions: (params) => [
                <GridActionsCellItem icon={<FcFullTrash />} label="Delete" />,
                <GridActionsCellItem icon={<IoEye />} label="Print" />,
            ]
        }

    ];


    return (
        <div>
            <div className='d-flex justify-content-end'>

                <button className='btn btn-primary my-4' onClick={handleShow}>Add Order</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>



            <Modal
                className='mt-5'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Order</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column gap-3 align-items-center my-3'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Order Name"
                        className='col-10 '

                    />
                    <div className='col-10 '>

                        <Autocomplete />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>




        </div>
    )
}
