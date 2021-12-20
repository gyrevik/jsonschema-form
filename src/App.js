import React, { useState } from "react"
import Form from "react-jsonschema-form"

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

localStorage.setItem('schema', schema)
console.log(localStorage.getItem('schema'))

const log = (type) => console.log.bind(console, type)

function App() {
  const [formSchema, setFormSchema] = useState({})

  return (
    <Form schema={schema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} />
  );
}

export default App;