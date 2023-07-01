/** @format */

import React from "react";

const TrTd = ({ data }) => {
  return (
    <tr className={`falx justify-between items-center   "border-t-yellow-500 border-2"`}>
      <td colSpan={6} className="border-b w-[55px!important] border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
        {data}
      </td>{" "}
    </tr>
  );
};

export default TrTd;
