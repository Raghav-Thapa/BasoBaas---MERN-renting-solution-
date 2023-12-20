import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import DataTable from 'react-data-table-component';

import { useCallback, useEffect, useState } from "react";
import customStyles from "../../../assets/css/table";
import { toast } from "react-toastify";
import room from "./";
import { TableActionButtons } from "../../../components/table-action.component";

const RoomListPage = () => {
    const handleDelete = async (id) => {
        try{
            setLoading(true)
            let response = await room.roomSvc.deleteRoomById(id);
            if(response.status){
                toast.success(response.msg)
                await loadRooms()
            }
        } catch(exception){
            toast.error("Error while deleting Room")
        }
    }
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.categories ? (row.categories.map((item) => item.name)).join(", ") : "-",
        },
        {
            name: 'Price',
            selector: row => "Npr. "+row.price,
        },
        {
            name: 'City',
            selector: row => row.city?.name,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableActionButtons 
                editurl={"/seller/room/"+row._id}
                id={row._id}
                deleteAction={handleDelete}
            />,
        },
    ];
    

    let [roomList, setRoomList] = useState();
    let [pagination, setPagination] = useState({
        currentPage:1, 
        perPage:10,
        totalNoOfRows:0
    })
    let [loading, setLoading] = useState(true)


    const loadRooms = useCallback(async(perPage=10, page=1) => {
        try{
            let response = await room.roomSvc.listAllRooms(perPage, page);
            if(response.status){
                setRoomList(response.result)
                setPagination(response.meta)
            }
        } catch(exception) {
            console.log("Baner Fetch Exception: ", exception)
            toast.error("Error while fetching room")
        }finally{
            setLoading(false)
        }
    }, []);

    const handlePageChange = page => {
		loadRooms(pagination.perPage, page)
	};

    const handlePerRowsChange = (perPage, page) => {
        loadRooms(perPage, page)
    }

    useEffect(() => {
        loadRooms()
    }, [])

    return (<>
    
    <Container fluid className="px-4">
            <Row>
                <Col sm={6}><h1 className="mt-4">Room List </h1></Col>
                <Col sm={6} className="mt-5">
                    <NavLink to="/seller/room/create" className={"btn btn-sm btn-success float-end"}>
                        <FaPlus /> Add Room
                    </NavLink>
                </Col>
            </Row>
            <Breadcrumb className="mb-4">
                <li className="breadcrumb-item">
                    <Link role="button" className={"breadcrumb-item"} to="/seller">Dashboard</Link>
                </li>
                <Breadcrumb.Item active>Room List </Breadcrumb.Item>
            </Breadcrumb>

            <Card className="mb-4">
                <Card.Header>
                    <h4>Room List </h4>
                </Card.Header>
                <Card.Body>
                    <DataTable
                        columns={columns}
                        data={roomList}
                        pagination
                        progressPending={loading}
                        dense
                        customStyles={customStyles}
                        paginationServer
                        paginationTotalRows={pagination.totalNoOfRows}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                    />

                </Card.Body>
            </Card>
        </Container>
    </>)
}

export default RoomListPage;