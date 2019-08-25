import React from "react";
import * as ACTIONS from "../store/actions/actions";
import { failure } from "../store/actions/actions";

import { connect } from "react-redux";

const Mockup = ({
    stateprop1,
    stateprop2,
    action1,
    action2,
    user_input,
    input_text,
    ...restOfProps
}) => {
    return (
        <>
            <h4>Get State: {stateprop1.toString()}</h4>
            <br />
            <button onClick={() => action1()}>Dispatch Action 1</button>
            <button onClick={() => action2()}>Dispatch Action 2</button>
            <hr />

            <form>
                <input
                    onChange={e => {
                        user_input(e.target.value);
                    }}
                    placeholder="user input"
                />
            </form>
            <br />
            <h3>{input_text}</h3>
            <hr />
            {stateprop2}
        </>
    );
};

const mapStateToProps = state => {
    return {
        stateprop1: state.example.stateprop1,
        stateprop2: state.example2.stateprop2,

        input_text: state.example2.user_input
    };
};

const mapDispatchToProps = dispatch => {
    return {

        action1: () => dispatch(ACTIONS.success()),
        action2: () => dispatch(failure()),

        user_input: whatever => dispatch(ACTIONS.user_input(whatever))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mockup);
