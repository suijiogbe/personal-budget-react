import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

function ChartJSComponent({ chartData }) {
    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
}

export default ChartJSComponent;