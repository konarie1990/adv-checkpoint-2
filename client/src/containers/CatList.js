import { connect } from "react-redux";
import CatList from "../components/CatList";
import { deleteCat } from "../actions/index";

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCat: model => dispatch(deleteCat(model))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatList);
