import { FC } from "react";
import { ICode } from "@/types/codes";
import Code from "./Code";

interface CodeListProps {
  codes: ICode[];
}

const CodeList: FC<CodeListProps> = ({ codes }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {codes.map((code) => <Code code={code}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default CodeList;
