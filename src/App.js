import React, { useState, useEffect } from "react"
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

localStorage.setItem('schema', JSON.stringify(schema))
console.log(localStorage.getItem('schema'))

const log = (type) => console.log.bind(console, type)
const schemaFromStorage = JSON.parse(localStorage.getItem('schema'))

function App() {
  const [formSchema, setFormSchema] = useState({})
    
  useEffect(() => {
    setFormSchema(schemaFromStorage)
  }, [schemaFromStorage]);

  return (
    <Form schema={formSchema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} />
  );
}

export default App;