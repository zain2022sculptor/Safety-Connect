const InspectionDetails = () => {
  return (
    <div className="mt-20 md:mt-4 ml-4 p-4 md:p-8 bg-white rounded-md">
      <div className="hidden md:block">
        <div className="flex justify-between">
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Inspection ID:
            </span>
            <span className="text-[#727272] pl-4">112233</span>
          </div>
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Identification Number:
            </span>
            <span className="text-[#727272] pl-4">EV-01</span>
          </div>
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Project:
            </span>
            <span className="text-[#727272] pl-4">Truck Loading Silo</span>
          </div>
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Location:
            </span>
            <span className="text-[#727272] pl-4">Silo-2</span>
          </div>
        </div>
        <div className="flex mt-8">
          <div>
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Due Date:
            </span>
            <span className="text-[#727272] pl-4">March, 8 2021 10:30 am</span>
          </div>
          <div className="ml-12">
            <span className="text-[#111111] font-semibold pb-2 pt-2">
              Inspection Date:
            </span>
            <span className="text-[#727272] pl-4">March, 8 2021 10:30 am</span>
          </div>
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
