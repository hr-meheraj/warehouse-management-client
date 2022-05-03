import React from "react";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import "./Loading.css";

const Loading = () => {
    useDynamicTitle("Loading...");
    return (
        <div className="loading">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
