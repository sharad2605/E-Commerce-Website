import { Table, Button, Container } from "react-bootstrap";
const Tours = () => {
    const tourData = [
        { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
        { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
        { date: "JUL 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
        { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
        { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
        { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
    ];
    return(
        <>
        <div>
            <h1 style={{textAlign:'center',fontFamily:'cursive'}}>Tours</h1>
        </div>
        <div className="container">
                <Table striped bordered hover>
                    <tbody>
                        {tourData.map((tour, index) => (
                            <tr key={index}>
                                <td><strong>{tour.date}</strong></td>
                                <td>{tour.location}</td>
                                <td>{tour.venue}</td>
                                <td>
                                    <Button variant="info" style={{ color: "white" }}>BUY TICKETS</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
        

    )
}

export default Tours;