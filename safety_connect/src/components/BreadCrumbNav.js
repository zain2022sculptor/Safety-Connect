const BreadCrumbNav = () => {
  return (
    <div className="mt-20 ml-4 p-8 bg-white rounded-md hidden md:block">
      <h1 className="text-xl font-semibold text-[#112565] pb-4">
        Audit and Inspection
      </h1>
      <span className="text-sm text-[#727272] pr-8">Inspection &gt; </span>
      <span className="text-sm text-[#727272] pr-8">In Progress &gt; </span>
      <span className="text-sm text-[#727272] pr-8">
        Inspection# 112233 &gt;{" "}
      </span>
      <span className="text-sm text-[#4BA735] pr-8">
        Electrical Vibrator-EV04 &gt;{" "}
      </span>
    </div>
  );
};

export default BreadCrumbNav;
