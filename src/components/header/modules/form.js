import React, { Component } from 'react';
import '../../../style/App.css';

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

class ContactForm extends Component {
  render() {
    return (
      <Form schema={schema}
      onChange={console.log("changed")}
      onSubmit={console.log("submitted")}
      onError={console.log("errors")} />
    );
  }
}

export default ContactForm;