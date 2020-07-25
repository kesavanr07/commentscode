import React, {Component} from 'react'
import { Col, Form,Row, Button, FormControl, Jumbotron, Alert } from 'react-bootstrap';
import UserList from './UserList.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id : '',
            comment_value : 'Test',
            err_msg : ''
        };
        this.selectedLocation = null;
        this.save_button_triggered = false;
    }
    
    getChangedValue = (event) => {
        const { value } = event.target;
        this.setState({
            comment_value : value,
        });
    }

    submitUserDetails = () => {
    }

    addUser = async () => {
        const {comment_value, _id} = this.state;
        try {
            const response = await fetch("http://localhost:8000/comments/save", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },  
                body : JSON.stringify({
                    _id,
                    comment_value,
                    type : 'add'
                })
            });

            this.save_button_triggered = false;
        } catch (error) {
            this.save_button_triggered = false;
        }
    }


    render() {
        const {comments, err_msg, comment_value} = this.state;
          
        return (
            <Jumbotron>

            <Col md={{ span: 12, offset: 0 }}>
                <h3 className="text-center">Comments</h3><br/>
                <Form>
                    <Form.Group>
                        <Col sm="12">
                            <FormControl 
                                as="textarea" 
                                onChange={this.getChangedValue}
                            >
                                {comment_value}
                            </FormControl>
                            {err_msg &&
                                <Form.Text className="text-error">{err_msg}</Form.Text>
                            }
                        </Col>
                    </Form.Group>
                    <br/>
                    <Col md={{ span: 12}}>
                        <Button variant="secondary" disabled={this.save_button_triggered} className="pull-right" onClick={()=> {this.resetForm(true)}}>Reset</Button>
                        <Button className="float-right" onClick={this.addUser}>Add</Button>
                    </Col>
                </Form>
            </Col>
            <UserList dataAdded={this.state.data_added} deleteTrain={this.deleteTrain} />
            </Jumbotron>
        )
    }
}

export default UserForm;
