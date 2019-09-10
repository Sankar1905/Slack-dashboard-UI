import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Example extends React.Component {
  render() {
    return (
      <Form>
        <legend>Create New Channel</legend>
        <Input label="Name" floatingLabel={true} required={true} />
        <Textarea label="Description" floatingLabel={true} required={true} />
        <Button variant="raised" color="primary">Submit</Button>
      </Form>
    );
  }
}

export default Example;