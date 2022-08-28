import elecVibrator from "../assets/electric-vibrator.png";

const InspectionSummary = () => {
  return (
    <div>
      <div className="mt-4 ml-4 p-8 bg-white rounded-md hidden md:block">
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
      <div className="block md:hidden mt-4 ml-4 p-8 bg-white rounded-md">
        <div className="flex justify-center">
          <img className="" src={elecVibrator} alt="Electric Vibrator" />
        </div>
        <div>
          <div className="table w-full">
            <div className="table-row-group text-sm">
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                  Inspection score:
                </div>
                <div className="table-cell text-right text-[#727272] border-b-2 w-full">
                  <progress
                    className="rounded-full"
                    id="score"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div className="table w-full pt-4">
            <div className="table-row-group text-sm">
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] pb-2 pt-2 pr-2">
                  <p className="font-medium">
                    1. Pysical condition of body is good and sound.
                  </p>
                  <p className="text-xs text-[#727272]">
                    Dust and Dirt shall be removed.
                  </p>
                </div>
                <div className="table-cell text-right">
                  <div class="float-right flex items-center">
                    <label
                      for="default-checkbox"
                      class="text-sm font-medium text-green-900 mr-4"
                    >
                      Yes
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] pb-2 pt-2 pr-2">
                  <p className="font-medium">
                    2. Power cable is free from damages and connections are made
                    using industrial plug
                  </p>
                  <p className="text-xs text-[#727272]">
                    Industrial plug was found broked which needs to be replaced.
                  </p>
                </div>
                <div className="table-cell text-right">
                  <div class="float-right flex items-center">
                    <label
                      for="default-checkbox"
                      class="text-sm font-medium text-green-900 mr-4"
                    >
                      Yes
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] pb-2 pt-2 pr-2">
                  <p className="font-medium">
                    3. Junction box from motor is free from defect.
                  </p>
                </div>
                <div className="table-cell text-right">
                  <div class="float-right flex items-center">
                    <label
                      for="default-checkbox"
                      class="text-sm font-medium text-green-900 mr-4"
                    >
                      Yes
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] pb-2 pt-2 pr-2">
                  <p className="font-medium">
                    4. On/Off switch is properly insulated.
                  </p>
                </div>
                <div className="table-cell text-right">
                  <div class="float-right flex items-center">
                    <label
                      for="default-checkbox"
                      class="text-sm font-medium text-green-900 mr-4"
                    >
                      Yes
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-left text-[#111111] pb-2 pt-2 pr-2">
                  <p className="font-medium">
                    5. Protective guard is installed on rotary parts.
                  </p>
                </div>
                <div className="table-cell text-right">
                  <div class="float-right flex items-center">
                    <label
                      for="default-checkbox"
                      class="text-sm font-medium text-green-900 mr-4"
                    >
                      Yes
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
