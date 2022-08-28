import elecVibrator from "../assets/electric-vibrator.png";

const InspectionSummary = () => {
  return (
    <div className="mt-4 ml-4 p-8 bg-white rounded-md">
      <h1>Electrical Vibrator</h1>
      <h4>Inspection Summary</h4>
      <div className="flex">
        <div>
          <h1>Inpsection Score</h1>
        </div>
        <div>
          <img src={elecVibrator} alt="Electric Vibrator" />
        </div>
      </div>
    </div>
  );
};

export default InspectionSummary;
