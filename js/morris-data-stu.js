$(function() {

   	Morris.Donut(
	{
        element: 'mdc-jm-chinese',
        data: [{
            label: "精通",
            value: 12
        }, {
            label: "熟悉",
            value: 30
        }, {
            label: "初学",
            value: 20
        }],
        resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });
	
	Morris.Donut(
	{
        element: 'mdc-jm-english',
        data: [{
            label: "精通",
            value: 15
        }, {
            label: "熟悉",
            value: 36
        }, {
            label: "初学",
            value: 21
        }],
       resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });
	Morris.Donut(
	{
        element: 'mdc-jm-mathmatics',
        data: [{
            label: "精通",
            value: 32
        }, {
            label: "熟悉",
            value: 50
        }, {
            label: "初学",
            value: 10
        }],
        resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });
	
	Morris.Donut(
	{
        element: 'mdc-jm-physics',
        data: [{
            label: "精通",
            value: 16
        }, {
            label: "熟悉",
            value: 21
        }, {
            label: "初学",
            value: 65
        }],
        resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });
	
	Morris.Donut(
	{
        element: 'mdc-jm-chemical',
        data: [{
            label: "精通",
            value: 42
        }, {
            label: "熟悉",
            value: 20
        }, {
            label: "初学",
            value: 33
        }],
        resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });
	
	Morris.Donut(
	{
        element: 'mdc-jm-biology',
        data: [{
            label: "精通",
            value: 66
        }, {
            label: "熟悉",
            value: 32
        }, {
            label: "初学",
            value: 45
        }],
        resize: true,
		colors: [ '#0066FF', '#99FF66',  '#FF0066']
    });


});
