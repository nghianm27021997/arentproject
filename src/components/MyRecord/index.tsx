import EntryScreen from "./EntryScreen";
import BodyFatGraph from "./BodyFatGraph";
import ExerciseRecord from "./ExerciseRecord";
import Diary from "./Diary";
import Button from "../Button";

import "./myrecord.scss";

const MyRecord = () => {
  return (
    <div className='my-record'>
      <EntryScreen />
      <BodyFatGraph />
      <ExerciseRecord />
      <Diary />
      <Button text="自分の日記をもっと見る" />
    </div>
  );
};

export default MyRecord;
