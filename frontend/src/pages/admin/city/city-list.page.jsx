import { Container, Breadcrumb, Card, Col, Row } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import DataTable from 'react-data-table-component';
import { useCallback, useEffect, useState } from "react";
import customStyles from "../../../assets/css/table";
import { toast } from "react-toastify";
import city from ".";
import { TableActionButtons } from "../../../components/table-action.component";


const CityListPage = () => {

   const handleDelete = async (id) => {
        try{
            let response = await city.citySvc.deleteCityById(id);
            if (response.status){
                toast.success(response.msg)
                await loadCity()
            }
        }catch(exception){
            toast.error("Error deleting city")
        }
   }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <TableActionButtons
            editurl ={"/admin/city/"+row._id}
            id= {row._id}
            deleteAction ={handleDelete}
            />
        },
    ];

    let [cityList, setCityList] = useState();

    let[pagination, setPagination] = useState({
        currentPage:1,
        perPage:10,
        totalNoOfRows:0
    })
    let [loading, setLoading] = useState(true)

    const loadCity = useCallback(async (perPage=10, page=1) => {
        //api call
        try {
            let response = await city.citySvc.listAllCitys(perPage, page);
            if (response.status) {
                setCityList(response.result)
                setPagination(response.meta)

            }
        } catch (exception) {
            console.log("city fetch exception", exception)
            toast.error("error fetching city")
        }finally{
            setLoading(false)
        }
    }, []);

    const handlePageChange = page => {
		loadCity(pagination.perPage, page)
	};

    const handlePerRowsChange = (perPage, page) => {
        loadCity(perPage, page)
    }

    useEffect(() => {
        loadCity()
    }, [])

    return (<>
        <Container fluid className="px-4">
            <Row>
                <Col sm={6}><h1 className="mt-4">City List</h1></Col>
                <Col sm={6} className="mt-5">
                    <NavLink to="/admin/city/create" className={"btn btn-sm btn-success float-end"}>
                        <FaPlus /> Add City</NavLink>
                </Col>
            </Row>

            <Breadcrumb className="mb-4">

                <Breadcrumb.Item>
                    <NavLink to={"/admin"}>Dashboard</NavLink>
                </Breadcrumb.Item>

                <Breadcrumb.Item active>City List
                </Breadcrumb.Item>
            </Breadcrumb>


            <Card className="mb-4">
                <Card.Header>
                    <h4>City List</h4>
                </Card.Header>
                <Card.Body>

                    <DataTable
                        columns={columns}
                        data={cityList}
                        pagination
                        progressPending={loading}
                        dense
                        customStyles={customStyles}
                        paginationServer
                        paginationTotalRows={pagination.totalNoOfRows}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange} 
                        />

                    <table></table>
                </Card.Body>
            </Card>
        </Container>
    </>)
}

export default CityListPage