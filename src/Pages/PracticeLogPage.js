import PracticeLogInput from "../PracticeLogElements/PracticeLogInput";
import { useState } from "react";
import PracticeLogData from "../PracticeLogData/PracticeLogData";

const PracticeLogPage = () => {
  return (
    <div>
    
      <PracticeLogInput />
      <PracticeLogData />
    </div>
  );
};

export default PracticeLogPage;
