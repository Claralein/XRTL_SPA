import { useState, useEffect, useRef } from "react";
import { useAppContext } from "../../services/AppContext";
import { useSocketContext } from "../../services/SocketContext";

const SwitchOnOff = (props) => {
  const [switchStatus, setSwitchStatus] = useState(false);
  const socketCtx = useSocketContext();
  const appCtx = useAppContext();
  const tempSwitch = useRef()

  const switchFunction = () => {
    socketCtx.socket.on("status", payload => {
      if (payload.componentId === props.component) {
        setSwitchStatus(payload.status['laser'])
      }
    })
  }

  tempSwitch.current = switchFunction
  useEffect(() => {
    tempSwitch.current();
  }, [socketCtx.socket])

  const switch_Handler = (event) => {
    event.preventDefault();
    const newStatus = !switchStatus;
    socketCtx.socket.emit("command", {
      userId: socketCtx.getNewUsername(),
      command: {
        componentId: 'switch',
        val: newStatus
      }
    })
    console.log("Current Laser State: " + newStatus);
    setSwitchStatus(newStatus);
    appCtx.addLog("User set position on " + props.component + " to " + newStatus)
  }

  return (
    <div className="switchOnOff">
      <button onClick={switch_Handler}>
        {switchStatus ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default SwitchOnOff