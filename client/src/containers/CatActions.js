import { connect } from "react-redux";
import CatActions from "../components/CatActions";
import { createCat } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    createCat: cat => dispatch(createCat(cat))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CatActions);
