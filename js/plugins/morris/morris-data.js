// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '0',
            estimated: 103,
            actual: 103
        }, {
            period: '1',
            estimated: 93,
            actual: 87
        }, {
            period: '2',
            estimated: 83,
            actual: 75
        }, {
            period: '3',
            estimated: 73,
            actual: 68
        }, {
            period: '4',
            estimated: 63,
            actual: 50
        }, {
            period: '5',
            estimated: 53,
            actual: 40
        }, {
            period: '6',
            estimated: 43,
            actual: 35
        }, {
            period: '7',
            estimated: 33,
            actual: 24
        }, {
            period: '8',
            estimated: 23,
            actual: 15
            
        }, {
            period: '9',
            estimated: 13,
            actual: 5
           
        },
        {
            period: '10',
            estimated: 0,
            actual: 1
           
        }],
        xkey: 'period',
        ykeys: ['estimated', 'actual'],
        ymax: 105, 
        labels: ['estimated', 'actual'],
        pointSize: 3,
        hideHover: 'auto',
        resize: true, 
        behaveLikeLine: true,
        parseTime: false,

    });

   


});
