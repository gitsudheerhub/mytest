import React from 'react';
import Form from 'react-bootstrap/Form';

const UserInput = ({onChange}) => {
    return (
      <div className="user">
        <Form>
            <Form.Group >
                <Form.Label>User Id</Form.Label>
                <Form.Control type="input" placeholder="Enter user" onChange={onChange}/>
                <Form.Text className="user-text">
                    Enter admin to get previliged access.
                </Form.Text>
            </Form.Group>
        </Form>
      </div>
    );
  }
  
  export default React.memo(UserInput);