$(function () {

    //Interacting with Data Points example

    var sin = [], cos = [];

    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i) / i]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#sincos"),
        [{ data: sin, label: "sin(x)/x" }, { data: cos, label: "cos(x)" }], {
            series: {
                shadowSize: 0,
                lines: { show: true },
                points: { show: true }
            },
            grid: { hoverable: true, clickable: true},
            yaxis: { min: -1.2, max: 1.2 },
            colors: ["#539F2E", "#3C67A5"]
        });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #fdd',
            padding: '2px',
            'background-color': '#dfeffc',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#sincos").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " of " + x + " = " + y);
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });

    $("#sincos").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });



    //Multiple

    var d1 = [];
    for (var i = 0; i < 14; i += 0.5)
        d1.push([i, Math.sin(i)]);

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    var d3 = [];
    for (var i = 0; i < 14; i += 0.5)
        d3.push([i, Math.cos(i)]);

    var d4 = [];
    for (var i = 0; i < 14; i += 0.1)
        d4.push([i, Math.sqrt(i * 10)]);

    var d5 = [];
    for (var i = 0; i < 14; i += 0.5)
        d5.push([i, Math.sqrt(i)]);

    var d6 = [];
    for (var i = 0; i < 14; i += 0.5 + Math.random())
        d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);

    $.plot($("#multiple"), [
        {
            data: d1,
            lines: { show: true, fill: true },
            shadowSize: 0
        },
        {
            data: d2,
            bars: { show: true },
            shadowSize: 0
        },
        {
            data: d3,
            points: { show: true },
            shadowSize: 0
        },
        {
            data: d4,
            lines: { show: true },
            shadowSize: 0
        },
        {
            data: d5,
            lines: { show: true },
            points: { show: true },
            shadowSize: 0
        },
        {
            data: d6,
            lines: { show: true, steps: true },
            shadowSize: 0
        }
    ]);






    // We use an inline data source in the example, usually data would
    // be fetched from a server

        var dxta = [],
            totalPoints = 300;
        var updateInterval = 30;

        function getRandomData() {

            if (dxta.length > 0)
                dxta = dxta.slice(1);

            // Do a random walk

            while (dxta.length < totalPoints) {

                var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                dxta.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < dxta.length; ++i) {
                res.push([i, dxta[i]])
            }

            return res;
        }

        var plot = $.plot("#realtime-updates", [ getRandomData() ], {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            }
        });

        function update() {

            plot.setData([getRandomData()]);

            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();








        var d1 = [];
        for (var i = 0; i <= 10; i += 1) {
            d1.push([i, parseInt(Math.random() * 30)]);
        }

        var d2 = [];
        for (var i = 0; i <= 10; i += 1) {
            d2.push([i, parseInt(Math.random() * 30)]);
        }

        var d3 = [];
        for (var i = 0; i <= 10; i += 1) {
            d3.push([i, parseInt(Math.random() * 30)]);
        }

        var stack = 0,
            bars = true,
            lines = false,
            steps = false;

        function plotWithOptions() {
            $.plot("#stacking", [ d1, d2, d3 ], {
                series: {
                    stack: stack,
                    lines: {
                        show: lines,
                        fill: true,
                        steps: steps
                    },
                    bars: {
                        show: bars,
                        barWidth: 0.6
                    }
                }
            });
        }

        plotWithOptions();

        $(".stackControls button").click(function (e) {
            e.preventDefault();
            stack = $(this).text() == "With stacking" ? true : null;
            plotWithOptions();
        });

        $(".graphControls button").click(function (e) {
            e.preventDefault();
            bars = $(this).text().indexOf("Bars") != -1;
            lines = $(this).text().indexOf("Lines") != -1;
            steps = $(this).text().indexOf("steps") != -1;
            plotWithOptions();
        });





    // data
    var data = [
        { label: "Series1",  data: 10},
        { label: "Series2",  data: 30},
        { label: "Series3",  data: 90},
        { label: "Series4",  data: 70},
        { label: "Series5",  data: 80},
        { label: "Series6",  data: 110}
    ];


    var series = Math.floor(Math.random()*10)+1;
    for( var i = 0; i<series; i++)
    {
        data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
    }

        $.plot($("#graph0"), data,
            {
                    series: {
                        pie: {
                            show: true
                        }
                    }
            });

    // DONUT
        $.plot($("#donut"), data,
            {
                series: {
                        pie: {
                                innerRadius: 0.5,
                                show: true
                        }
                },
                legend: {
                    show: false
                }
            });

    // INTERACTIVE
        $.plot($("#interactive"), data,
            {
                series: {
                        pie: {
                                show: true
                        }
                },
                grid: {
                        hoverable: true,
                        clickable: true
                },
                legend: {
                    show: false
                }
            });
            $("#interactive").bind("plothover", pieHover);


    function pieHover(event, pos, obj)
    {
            if (!obj)
                    return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
    }









});










