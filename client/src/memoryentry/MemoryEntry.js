import React from "react";
import { useState } from "react";
import "./MemoryEntry.css";
export default function MemoryEntry() {
  const [firstName, setFirstName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  function fillFirstName(e) {
    setFirstName(e.target.value);
    //console.log("Value set for first name is " + e.target.value);
  }

  function fillDescription(e) {
    setDescription(e.target.value);
    //console.log("Value set for description is " + e.target.value);
  }

  function fillTags(e) {
    setTags(e.target.value);
    //console.log("Value set for tag is " + e.target.value);
  }

  function clearAllFields() {
    setDescription("");
    setFirstName("");
    setTags("");
  }

  function saveDataInBackEnd() {
    console.log("saveDataInBackEnd called ");
    fetch(
      "https://k8s0277676-node1.sdthunder.lab3.service-now.com/api/snc/memoriesapi/memory",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
        body: JSON.stringify({
          firstName: firstName,
          description: description,
          tags: tags,
        }),
      }
    );
    clearAllFields();
  }

  return (
    <div>
      <div className="divStyle">
        <h1 className="headerStyle">Memories</h1>
        <label>First name:</label>
        <br />
        <input
          className="labelMargin"
          value={firstName}
          onChange={(e) => fillFirstName(e)}
        />
        <br />
        <label>Description:</label>
        <br />
        <textarea
          className="labelMargin"
          value={description}
          onChange={(e) => fillDescription(e)}
        />
        <br />
        <label>Tags:</label>
        <br />
        <input
          className="labelMargin"
          value={tags}
          onChange={(e) => fillTags(e)}
        />
        <br />
        <button className="button" onClick={saveDataInBackEnd}>
          Submit
        </button>
        <button className="button" onClick={clearAllFields}>
          Clear
        </button>
      </div>
    </div>
  );
}
