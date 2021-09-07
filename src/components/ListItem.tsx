import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import state from "../store/initialState";


function ListItem(props: any) {
    return (
    <div>{props.value}</div>
    )
}

const mapStateToProps = (state: any) => ({
    state,
})


export default connect(mapStateToProps)(ListItem);