import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

type Props = {};

function Spinner({}: Props) {
  return <Dots color="white" style={{ alignSelf: "center" }} />;
}

export default Spinner;
