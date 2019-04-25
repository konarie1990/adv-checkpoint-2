import React, { Component, Fragment } from "react";
import styled from "styled-components";
import CatList from "../containers/CatList";
import CatActions from "../containers/CatActions";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Home extends Component {
  componentDidMount() {
    fetch("/api/cats")
      .then(res => res.json())
      .then(cats => this.props.listCats(cats))
      .catch(() => this.props.listCats([]));
  }

  render() {
    return (
      <Fragment>
        <Center>
          <h1>Cats</h1>
        </Center>
        <Center>
          <FlexWrapper>
            <CatList />
            <CatActions />
          </FlexWrapper>
        </Center>
      </Fragment>
    );
  }
}

export default Home;
