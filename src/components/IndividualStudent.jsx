import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import {getStudentById} from '../firebase'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const IndividualStudent = () => {
    const {student_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const[student, setStudent] = useState({})
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        console.log("Use effect in indiv student")
        getStudentById(student_id)
        .then((returnedData) => {
            setStudent(returnedData)
            setIsLoading(false)
            console.log("Student" ,student);
        })
       .catch((error) => {
            setErrorMsg(error)
            console.log(errorMsg);
       })
    }, []);

    
    if(isLoading){
        return <div className="loading">
        <Spinner animation="border" variant="dark" />
        <p>Loading...</p>
        </div>
    }


    if(errorMsg){
        return (
            <p>{errorMsg}</p>
        )
    }

    return(
        <>
        <Link to={`/`}><button className='back-button'>Back</button></Link>
        <Container  className='students-container' fluid>
        <Row>
            <Col key={student.student_id} className='students-individual'>
            <p className='student-info'><strong>Name:</strong> {student.name}</p>
            <p className='student-info'><strong>D.O.B:</strong> {student.dateOfBirth}</p>
            <p className='student-info'><strong>Email:</strong> {student.email}</p>
            <p className='student-info'><strong>Address:</strong> {student.address}</p>
            <Button className='buttons'>Amend</Button> <Button className='buttons'>Delete</Button>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default IndividualStudent