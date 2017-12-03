$(function() {
  Morris.Area({
    element: 'morris-area-chart',
    data: [{
      period: '2017-11-01',
      1: 30,
      2: 60,
      3: 194,
      4: 94,
      5: 45,
      6: 60
    },{
      period: '2017-11-02',
      1: 35,
      2: 64,
      3: 200,
      4: 58,
      5: 13,
      6: 59
    },{
      period: '2017-11-03',
      1: 36,
      2: 67,
      3: 45,
      4: 69,
      5: 40,
      6: 85
    },{
      period: '2017-11-04',
      1: 24,
      2: 70,
      3: 130,
      4: 84,
      5: 82,
      6: 40
    },{
      period: '2017-11-05',
      1: 86,
      2: 45,
      3: 139,
      4: 49,
      5: 28,
      6: 57
    },{
      period: '2017-11-06',
      1: 56,
      2: 52,
      3: 160,
      4: 28,
      5: 68,
      6: 90
    }],
    xkey: 'period',
    ykeys: [1, 2, 3, 4, 5, 6],
    labels: ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'],
    pointSize: 2,
    hideHover: 'auto',
    resize: true
  });

  Morris.Donut({
    element: 'morris-donut-chart',
    data: [{
      label: "Download Sales",
      value: 12
    }, {
      label: "In-Store Sales",
      value: 30
    }, {
      label: "Mail-Order Sales",
      value: 20
    }],
    resize: true
  });

  Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
      y: '2006',
      a: 100,
      b: 90
    }, {
      y: '2007',
      a: 75,
      b: 65
    }, {
      y: '2008',
      a: 50,
      b: 40
    }, {
      y: '2009',
      a: 75,
      b: 65
    }, {
      y: '2010',
      a: 50,
      b: 40
    }, {
      y: '2011',
      a: 75,
      b: 65
    }, {
      y: '2012',
      a: 100,
      b: 90
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: 'auto',
    resize: true
  });

  Morris.Donut({
    element: 'morris-donut-chart',
    data: [{
      label: "Download Sales",
      value: 12
    }, {
      label: "In-Store Sales",
      value: 30
    }, {
      label: "Mail-Order Sales",
      value: 20
    }],
    resize: true
  });

  Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
      y: '2006',
      a: 100,
      b: 90
    }, {
      y: '2007',
      a: 75,
      b: 65
    }, {
      y: '2008',
      a: 50,
      b: 40
    }, {
      y: '2009',
      a: 75,
      b: 65
    }, {
      y: '2010',
      a: 50,
      b: 40
    }, {
      y: '2011',
      a: 75,
      b: 65
    }, {
      y: '2012',
      a: 100,
      b: 90
    }],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: 'auto',
    resize: true
  });

});
