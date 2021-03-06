import React, {Component} from 'react'
import { Col, Table, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import moment from 'moment';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_comment : [{
                value : 'Test 1',
                id : 1,
                parent_id : 0
            },{
                value : 'Test 2',
                id : 2,
                parent_id : 1
            },{
                value : 'Test 3',
                id : 3,
                parent_id : 2
            }]
        }
        // this.all_comment = [{
        //     value : 'Test 1',
        //     id : 1,
        //     parent_id : 0
        // },{
        //     value : 'Test 2',
        //     id : 2,
        //     parent_id : 1
        // },{
        //     value : 'Test 3',
        //     id : 3,
        //     parent_id : 2
        // }];
        this.comment_section = '';
    }

    formComments = (parent_id = 0) => {

        
        // this.all_comment.map((obj_val) => {
        //     var text = obj_val.value;
        //     var parent_id = obj_val.parent_id || 0;
        //     this.comment_section +=  text +" "+ parent_id;
        //     if(parent_id != 0 && parent_id == obj_val.parent_id) {

        //     } else {
        //         return 
        //     }
        // });

    }

    getUsers = async () => {

        var {all_comment} = this.state;
        try {
            const response  = await fetch("http://localhost:8000/comments/get", { method: 'POST'});
            const user_data = await response.json();

            // if(user_data && user_data.status === "success") {
            //     all_comment = user_data.data;
            //     lis_users_err = "";
            // } else {
            //     lis_users_err = (user_data && user_data.data) || "Unexpected error occured";
            // }
        } catch (error) {
            // lis_users_err = "Unexpected error occured"
        }

        this.setState({
            all_comment,
            // lis_users_err
        });
    }

    componentDidMount() {
        this.getUsers();
    }
    
    componentWillReceiveProps(props) {
        if(props.dataAdded === true) {
            this.getUsers();
        }
    }
    
    render() {
        const {all_comment} = this.state;
        return (
            <Col md={{ span: 12}}>
            <hr/>
{/* 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email Id</th>
                            <th>Job Type</th>
                            <th>Phone Number</th>
                            <th>Preferred Location</th>
                            <th>DOB</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_comment.map((obj, index) => (
                            <tr key={index}>
                                <td>{obj.username}</td>
                                <td>{obj.email_id}</td>
                                <td>{obj.job_type}</td>
                                <td>{obj.phone_number}</td>
                                <td className="text-capitalize">{obj.preferred_location}</td>
                                <td>{moment(obj.date_of_birth).format("MM/DD/YYYY")}</td>
                                <td>
                                <OverlayTrigger
                                    trigger="click"
                                    key={index}
                                    placement={"top"}
                                    overlay={
                                        <Popover id={`popover-positioned-${index}`}>
                                            <Popover.Content>
                                                <img src={`/images/${obj.profile}`} alt="no" width="100" height="100"/>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                    <Button variant="secondary" size="sm"> Profile</Button>
                                </OverlayTrigger>
                                <Button size="sm" variant="danger" onClick={() => this.props.deleteTrain(obj._id)}>Delete</Button>
                                </td>
                            </tr>      
                        ))}
                        {all_comment.length === 0 &&
                            <tr>
                                <td colSpan="7" className="text-center">No Users data found</td>
                            </tr>
                        }
                    </tbody>
                </Table> */}
            </Col>
        )
    }
}

export default UserList;
