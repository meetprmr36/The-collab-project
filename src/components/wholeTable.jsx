import React from "react";

const WholeTable = () => {
    return (
        <div className="wholeTable">
            <table className="tableee">
                <thead>
                    <tr className="TabHead">
                        <td className="Series">Sr.No</td>
                        <td className="Date">Date</td>
                        <td className="Attendace">Attendance visual</td>
                        <td className="eff">Effective hour</td>
                        <td className="Break">Break</td>
                        <td className="Gross">Gross Hour</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default WholeTable;