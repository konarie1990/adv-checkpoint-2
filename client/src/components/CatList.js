import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  padding: 50px;
`;

const deleteCat = (id, props) => {
  fetch(`/api/cats/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => props.deleteCat(id));
};

const CatList = props => (
  <Wrapper>
    <h3>List of Cats</h3>
    {props.cats.map((cat, index) => (
      <p key={index}>
        {cat.name} &nbsp;
        <Link to={`/cats/${cat._id}`}>details</Link>
        &nbsp;
        <Button
          onClick={() => deleteCat(cat._id, props)}
          type="submit"
          variant="contained"
        >
          Delete
        </Button>
      </p>
    ))}
  </Wrapper>
);

export default CatList;
