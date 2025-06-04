import React from "react";
import { Spin } from "antd";

const Loading = () => {
    return (
      <div className="flex justify-center mt-40">
        <Spin />
      </div>
    );
};

export default Loading;
