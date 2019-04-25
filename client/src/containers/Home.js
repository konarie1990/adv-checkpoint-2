import { connect } from "react-redux";
import Home from "../components/Home";
import { listCats } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    listCats: cats => dispatch(listCats(cats))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
