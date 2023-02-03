import "./bodyfatgraph.scss";
import Chart from "../../MyPage/Chart";
import ChartImage from "../../../assets/Chart/main_graph.png";

const BodyFatGraph = () => {
  return (
    <div className='body-fat-graph' id="bodyrecord">
      <div>
        <span className='body-record-text'>
          BODY <p>RECORD</p>
        </span>
        <span>2021.05.21</span>
      </div>
      <Chart src={ChartImage} />
      <ul>
        <li><p>日</p></li>
        <li><p>週</p></li>
        <li><p>月</p></li>
        <li><p className="active">年</p></li>
      </ul>
    </div>
  );
};

export default BodyFatGraph;
