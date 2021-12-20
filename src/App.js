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

function App() {
  const [formSchema, setFormSchema] = useState({})

  console.log('formSchema:', formSchema)
  if (formSchema == {}) console.log('formSchema is an empty object')
  console.log(formSchema.length)  // undefined

  const schemaFromStorage = JSON.parse(localStorage.getItem('schema'))
  
  useEffect(() => {
    setFormSchema(schemaFromStorage)
  });

  return (
    <Form schema={formSchema}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} />
  );
}

export default App;