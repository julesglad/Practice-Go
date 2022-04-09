import PracticeLogInput from "../PracticeLogElements/PracticeLogInput";

const PracticeLogData = (props) => {
  if (props.item === 0) {
    return <h2>No Current Logs</h2>;
  }

  return (
    <ul>
      {props.item.map((log) => (
        <PracticeLogInput date={log.date} note={log.note} time={log.time} />
      ))}
    </ul>
  );
};

export default PracticeLogData