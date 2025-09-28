import * as d3 from "d3";
import { useEffect, useRef } from "react";

function D3JS({ d3Data }) {
    const ref = useRef();

    useEffect(() => {
        if (!d3Data || d3Data.length === 0) return;

        d3.select(ref.current).selectAll("*").remove();

        const margin = 80;
        const width = 400 + margin * 2;
        const height = 150 + margin * 2;
        const radius = 140;

        const chartColor = d3.scaleOrdinal([
            "#ffcd56",
            "#ff6384",
            "#36a2eb",
            "#fd6b19"
        ]);

        const svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        const slice = svg.append("g").attr("class", "slices");
        const text = svg.append("g").attr("class", "labels");
        const polyline = svg.append("g").attr("class", "lines");

        const pie = d3.pie()
            .sort(null)
            .value(d => d.budget)(d3Data);
        
        const arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);
        
        const outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        const midAngle = d => d.startAngle + (d.endAngle - d.startAngle) / 2;

        slice.selectAll("path")
            .data(pie)
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", d => chartColor(d.data.title))
            .attr("class", "slice");

        text.selectAll("text")
            .data(pie)
            .enter()
            .append("text")
            .attr("dy", ".35em")
            .text(d => d.data.title)
            .attr("font-size", "12px")
            .attr("transform", d => {
                const pos = outerArc.centroid(d);
                pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
                return `translate(${pos})`;
            })
            .style("text-anchor", d => midAngle(d) < Math.PI ? "start" : "end");

        polyline.selectAll("polyline")
            .data(pie)
            .enter()
            .append("polyline")
            .attr("points", d => {
                const posA = arc.centroid(d);
                const posB = outerArc.centroid(d);
                const posC = [...posB];
                posC[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
                return [posA, posB, posC];
            });

    }, [d3Data]);

    return (
        <div ref={ref}></div>
    );
   

}

export default D3JS;