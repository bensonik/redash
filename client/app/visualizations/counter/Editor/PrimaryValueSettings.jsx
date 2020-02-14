import { omit } from "lodash";
import React, { useCallback } from "react";
import { EditorPropTypes } from "@/visualizations/prop-types";
import CounterValueOptions from "./CounterValueOptions";
import counterTypes from "../counterTypes";

export default function PrimaryValueSettings({ options, data, onOptionsChange }) {
  const onChange = useCallback(primaryValue => onOptionsChange({ primaryValue }), [onOptionsChange]);

  return (
    <React.Fragment>
      <CounterValueOptions
        counterTypes={omit(counterTypes, ["unused"])}
        options={options.primaryValue}
        data={data}
        onChange={onChange}
      />
    </React.Fragment>
  );
}

PrimaryValueSettings.propTypes = EditorPropTypes;
