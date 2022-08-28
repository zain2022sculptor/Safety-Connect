import elecVibrator from "../assets/electric-vibrator.png";
import InspectionScore from "./InspectionScore";

const InspectionSummary = () => {
  return (
    <div>
      <div className="mt-4 ml-4 p-8 bg-white rounded-md hidden md:block">
        <h1 className="text-center font-semibold text-[#112565] text-xl">
          Electrical Vibrator
        </h1>
        <h4 className="text-center text-sm pb-8 mb-8">Inspection Summary</h4>
        <div className="flex">
          <div>
            <InspectionScore />
          </div>
          <div className="ml-16">
            <img src={elecVibrator} alt="Electric Vibrator" />
          </div>
        </div>
      </div>
      <div className="mt-4 ml-4 p-8 bg-white rounded-md hidden md:block">
        <div className="flex justify-between">
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Inspection by:
            </span>
            <span className="text-[#727272] pl-4">Khizer Javed</span>
          </div>
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Submitted To:
            </span>
            <span className="pl-4">
              <select
                id="inspectors"
                className="bg-gray-50 border border-[#727272] text-[#727272] text-sm rounded-md p-1"
              >
                <option value="US">Waseem Ali</option>
                <option value="CA">Khizer Javed</option>
                <option value="FR">Hamza Iqbal</option>
                <option value="DE">Ahsan Amin</option>
              </select>
            </span>
          </div>
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Status:
            </span>
            <span className="text-[#727272] pl-4">Pending Approval</span>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-[#4BA735] w-full mt-4 h-12 rounded-md text-white font-semibold">
            Print
          </button>
        </div>
      </div>

      <div className="block md:hidden mt-4 ml-4 p-8 bg-white rounded-md">
        <div className="flex justify-center">
          <img className="" src={elecVibrator} alt="Electric Vibrator" />
        </div>
        <div>
          <InspectionScore />
          <div className="table w-full pt-4">
            <div className="table-row-group text-sm">
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                  Inspection by:
                </div>
                <div className="table-cell text-right text-[#727272] border-b-2">
                  Khizer Javed
                </div>
              </div>

              <div className="table-row">
                <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                  Submitted to:
                </div>
                <div className="table-cell text-right text-[#727272] border-b-2">
                  <select
                    id="inspectors"
                    className="bg-gray-50 border border-[#727272] text-[#727272] text-sm rounded-md"
                  >
                    <option value="US">Waseem Ali</option>
                    <option value="CA">Khizer Javed</option>
                    <option value="FR">Hamza Iqbal</option>
                    <option value="DE">Ahsan Amin</option>
                  </select>
                </div>
              </div>

              <div className="table-row">
                <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                  Status:
                </div>
                <div className="table-cell text-right text-[#727272] border-b-2">
                  Pending Approval
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#4BA735] w-full mt-4 h-12 rounded-md text-white font-semibold">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspectionSummary;
