import React, { Component} from "react";

import {
  Classes,
  Drawer,
  Position,
} from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";

import SprintEditor from "./SprintEditor";

import {useActiveSprints} from "../db/tasks";

// useActiveSprints

export default function Sprints ({onClose, isOpen}) {
  const {sprints, addSprint} = useActiveSprints();

  return (<Drawer
    icon="timeline-events"
    onClose={onClose}
    title="Sprints"
    isOpen={isOpen}
    position={Position.LEFT}
  >
    <div className={Classes.DRAWER_BODY}>
      <div className={Classes.DIALOG_BODY}>
        <SprintEditor />
      </div>
    </div>
  </Drawer>);
}

/*
class Sprints extends Component {
    constructor () {
      super();
    }

    render () {
      const {onClose, isOpen} = this.props;

      return <Drawer
        icon="timeline-events"
        onClose={onClose}
        title="Sprints"
        isOpen={isOpen}
        position={Position.LEFT}
      >
        <div className={Classes.DRAWER_BODY}>
          <div className={Classes.DIALOG_BODY}>
            <SprintEditor />
          </div>
        </div>
      </Drawer>;
    }
}

export default Sprints;
*/