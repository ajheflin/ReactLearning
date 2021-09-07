import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
    const maxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
    return (
        <div className="chart">
            {props.dataPoints.map(data => <ChartBar key={data.key} label={data.label} value={data.value} maxValue={maxValue} />)}
        </div>
    )
};

export default Chart;