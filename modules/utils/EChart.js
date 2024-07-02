export const basicBarChart = {
    series: [{
        data: [1365, 1220, 1100, 780, 584, 500],
    }],
    chartOptions: {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#e1e7fc", "#eef0f7", "#3762ea"],
        grid: {
            borderColor: "#f1f1f1",
        },
        xaxis: {
            categories: [
                "Brazil",
                "Canada",
                "Serbia",
                "US",
                "Russia",
            ],
        },
    },
}