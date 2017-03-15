(function () {
	var app = angular.module('store',[]);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		};

		this.isSet = function (checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function(){
	    this.current = 0;
	    this.setCurrent = function(newGallery){
	    	this.current = newGallery || 0;
	    };
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
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
		],
		reviews: [
		{
			stars: 5,
			body: "La-la Dance with me",
			author: "me@gmail.com"
		},
		{
			stars: 4,
			body: "La-la dont dance with me",
			author: "notme@gmail.com"
		}
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
		],
		reviews: [
		{
			stars: 5,
			body: "run munchester run",
			author: "me@gmail.com"
		},
		{
			stars: 4,
			body: "bruce wayne without alfred",
			author: "notme@gmail.com"
		}
		]
	}
]
})();