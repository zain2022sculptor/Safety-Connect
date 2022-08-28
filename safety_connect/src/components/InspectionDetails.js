const InspectionDetails = () => {
  return (
    <div className="mt-4 ml-4 p-4 md:p-8 bg-white rounded-md">
      <div className="hidden md:block">
        <div>
          <span>Inspections ID: 112233</span>
          <span>Identification Number: 112233</span>
          <span>Project: 112233</span>
          <span>Location: Silo-2</span>
        </div>
        <div>
          <span>Due Date: 112233</span>
          <span>Inspection Date: Silo-2</span>
        </div>
      </div>
      <div className="md:hidden">
        <h3 className="text-center font-semibold text-[#112565] text-xl">
          Electrical Vibrator
        </h3>
        <p className="text-center text-sm pb-2">Audit Summary</p>
        <div className="table w-full">
          <div className="table-row-group text-sm">
            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Inspection ID:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                112233
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Identification Number:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                EV-01
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Project:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                Truck Loading Silo
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Location:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                Silo-2
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Due Date:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                Mar, 8 2021 10:30 am
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell text-left text-[#111111] font-semibold pb-2 pt-2 border-b-2">
                Inspeciton Date:
              </div>
              <div className="table-cell text-right text-[#727272] border-b-2">
                Mar, 8 2021 10:30 am
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionDetails;
