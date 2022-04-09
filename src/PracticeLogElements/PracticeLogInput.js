import {
  Button,
  Form,
  Input,
  GridContainer,
  Label,
  InputWrapper,
  DateWrapper,
  NotesWrapper,
  StopWatchWrapper,
} from "./PracticeLog.styled";
import { useForm, Controller } from "react-hook-form";
import StopWatch from "./StopWatch";
import { useState } from "react";

const PracticeLogInput = () => {
  const { register, handleSubmit, control, setValue } = useForm();

  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredNote, setEnteredNote] = useState("");

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  // const timeChangeHandler = (event) => {
  //   setEnteredTime(event.target.value);
  // };

  // const noteChangeHandler = (event) => {
  //   setEnteredNote(event.target.value);
  // };

  const submitHandler = (event) => {
   // event.preventDefault();
    const logData = {
      date: new Date(enteredDate),
      time: enteredTime,
      note: enteredNote,
    };

    this.props.onSaveLogData(logData);
    setEnteredDate("");
    setEnteredTime("");
    setEnteredNote("");
  };

  //const onSubmit = (data) => console.log(data);

  return (
    <GridContainer>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <DateWrapper>
          <Label>Date</Label>
          <Input type="date" {...register("Date")} placeholder="Date"></Input>
        </DateWrapper>
        <NotesWrapper>
          <Label>Notes</Label>
          <Input type="text" {...register("Notes")} placeholder="Notes"></Input>
        </NotesWrapper>
        <Controller
          control={control}
          name="Time"
          render={({ field: { onChange, value, name, ref } }) => (
            <StopWatch onChange={onChange} value={value} />
          )}
        />
        <Button type="Submit">Submit</Button>
      </Form>
    </GridContainer>
  );
};

export default PracticeLogInput;
