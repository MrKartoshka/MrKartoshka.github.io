(function () {
	var app = angular.module('store',[]);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	var gems =[
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'la-la land',
		canPurchase: true,
		soldOut: true,
		images: [
			{
				full: 'http://placehold.it/360x150',
				thumb: 'http://placehold.it/120x50' 
			},
			{
				full: 'http://lorempixel.com/output/city-q-g-360-150-3.jpg',
				thumb: 'http://lorempixel.com/output/technics-q-c-120-50-4.jpg' 
			},
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'manchester by the sea',
		canPurchase: false,
		images: [
			{
				full: 'http://placehold.it/360x150',
				thumb: 'http://placehold.it/120x50' 
			},
			{
				full: 'http://lorempixel.com/output/city-q-g-360-150-3.jpg',
				thumb: 'http://lorempixel.com/output/technics-q-c-120-50-4.jpg' 
			},
		]
	}
]
})();