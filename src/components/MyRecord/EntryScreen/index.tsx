import "./entryscreen.scss";
import { SCREEN_RECORD } from "../../../constant";
import DetailEntryScreen from "./detail";

const EntryScreen = () => {
  return (
    <div className='entry-screen'>
      {SCREEN_RECORD.map((item, index) => (
        <div key={index}>
          <DetailEntryScreen item={item}/>
        </div>
      ))}
    </div>
  );
};

export default EntryScreen;
