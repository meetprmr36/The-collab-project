import moment from "moment";
import React from "react";

const TableBody = () => {
    const exampleData = [
        {
            date: '27-08-2016',
            inOut: [
                { type: 'in', time: '09:30' },
                { type: 'out', time: '10:10' },
                { type: 'in', time: '10:30' },
                { type: 'out', time: '13:10' },
                { type: 'in', time: '13:50' },
                { type: 'out', time: '16:10' },
                { type: 'in', time: '16:20' },
                { type: 'out', time: '19:10' },
            ],
        },
        {
            date: '26-08-2016',
            inOut: [
                { type: 'in', time: '09:40' },
                { type: 'out', time: '10:10' },
                { type: 'in', time: '10:30' },
                { type: 'out', time: '13:10' },
                { type: 'in', time: '13:50' },
                { type: 'out', time: '16:10' },
                { type: 'in', time: '16:20' },
                { type: 'out', time: '20:10' },
            ],
        },
    ]



    // const Printingin = (props) => {
    //     return props.inOut.map((entry, index) => {
    //         if (entry.type === 'in') {
    //             return (
    //                 <div key={index} className="inTime">
    //                     <span className="inDot"></span>
    //                     <span className="inTimeText">{entry.time}</span>
    //                 </div>
    //             );
    //         }
    //         return null;
    //     });
    // }

    const calculateEfficient = (inOut) => {
        let totalMinutes = 0;
        for (let i = 0; i < inOut.length; i += 2) {
            const inTime = moment(inOut[i].time, 'HH:mm');
            const outTime = moment(inOut[i + 1].time, 'HH:mm');
            const duration = moment.duration(outTime.diff(inTime));
            totalMinutes += duration.asMinutes();
        }
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    const calculateBreak = (inOut) => {
        let totalMinutes = 0;
        for (let i = 1; i < inOut.length - 1; i += 2) {
            const outTime = moment(inOut[i].time, 'HH:mm');
            const nextInTime = moment(inOut[i + 1].time, 'HH:mm');
            const duration = moment.duration(nextInTime.diff(outTime));
            totalMinutes += duration.asMinutes();
        }
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    const calsulateGross = (inOut) => {
        let totalMinutes = 0;
        for (let i = 0; i < inOut.length; i += 2) {
            const inTime = moment(inOut[i].time, 'HH:mm');
            const outTime = moment(inOut[i + 1].time, 'HH:mm');
            const duration = moment.duration(outTime.diff(inTime));
            totalMinutes += duration.asMinutes();
        }
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    }

    const PrintingData = (data) => {
        return data.map((entry, index) => {
            const formattedDay = moment(entry.date, 'DD-MM-YYYY').format('llll').slice(0, 3);
            const formattedate = moment(entry.date, 'DD-MM-YYYY').format('llll').slice(8, 12);
            const formattedmonth = moment(entry.date, 'DD-MM-YYYY').format('llll').slice(4, 8);
            return (
                <tr className="TabHead" key={index}>
                    <td className="Series">{index + 1}</td>
                    <td className="Date">{formattedDay + formattedate + formattedmonth}</td>
                    <td className="Attendace">Present</td>
                    <td className="eff">{calculateEfficient(entry.inOut)}</td>
                    <td className="Break">{calculateBreak(entry.inOut)}</td>
                    <td className="Gross">{calsulateGross(entry.inOut)}</td>
                </tr>
            );
        });
    };

    return (
        <div className="wholeTable">
            <table className="tableee">
                <tbody className="TabBody">
                    {PrintingData(exampleData)}
                </tbody>
            </table>
        </div>
    )
}
export default TableBody;