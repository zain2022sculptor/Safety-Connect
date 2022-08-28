const InspectionScore = () => {
  return (
    <div>
      <div className="table w-full">
        <div className="table-row-group text-sm">
          <div className="table-row">
            <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
              <p>Inspection score:</p>
            </div>
            <div className="table-cell text-right text-[#727272] border-b-2">
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
              <div className="float-right flex items-center">
                <label className="text-sm font-medium text-green-900 mr-4">
                  Yes
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
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
              <div className="float-right flex items-center">
                <label className="text-sm font-medium text-green-900 mr-4">
                  Yes
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
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
              <div className="float-right flex items-center">
                <label className="text-sm font-medium text-green-900 mr-4">
                  Yes
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
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
              <div className="float-right flex items-center">
                <label className="text-sm font-medium text-green-900 mr-4">
                  Yes
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
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
              <div className="float-right flex items-center">
                <label className="text-sm font-medium text-green-900 mr-4">
                  Yes
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionScore;
