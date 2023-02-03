import "./exercise-record.scss";

const ExerciseRecord = () => {
  const bodyRecord = new Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className='exercise-record' id="myexercise">
      <div>
        <span className='body-record-text'>
          MY <p>EXERCISE</p>
        </span>
        <span>2021.05.21</span>
      </div>

      <div className='main-content' id="main">
        {bodyRecord[0].map((_item, index) => (
          <div className='content' key={index}>
            <span className="dot">●</span>
            <div>
              <p>家事全般（立位・軽い）</p>
              <span>26kcal</span>
            </div>
            <span>10 min</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseRecord;
