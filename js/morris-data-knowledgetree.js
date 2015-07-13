$(function() {

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
		colors: [ 'palegreen', '#FFFF88',  '#fbfbfb']
    });
	

});
