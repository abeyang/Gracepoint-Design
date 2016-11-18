Vue.component('design-card', {
	props: ['design'],
	template: '#design-card',
	methods: {
		fullurl: function() {
			return 'Gracepoint/' + this.design.churchgroup + '/' + this.design.directory + '/';
		},
		getThumb: function() {
			return this.fullurl() + '_thumb.jpg';
		},
		getDate: function() {
			var arr = this.design.directory.split('-');
			// todo: need to prettify date
			return arr[0];
		}
	}
});

var app = new Vue({
	el: '#app',
	data: {
		designs: [
			<!-- DO NOT MODIFY THIS VARIABLE! -->
			
			<!-- PLACE ADDITIONAL _INFO.json FILES TO THIS LIST (NEWEST FIRST!): -->
			
			{title: "Sunday Pause Series",
			description: "Flyer for Gracepoint",
			designer: "Abe Yang",
			directory: "20160925-SundayPause",
			fonts: [
			  "oswald",
			  "lora"
			],
			tags: [
			  "sunday service",
			  "message series",
			  "flyer"
			],
			staffpick: true,
			reference: "",
			churchgroup: "Seattle/seattle-a2f"},
			{title: "Boardgame Night",
			description: "Flyer for outreach",
			designer: "Abe Yang",
			directory: "20160822-BoardgameNight",
			fonts: [],
			tags: [
			    "boardgame",
			    "outreach",
			    "flyer"
			],
			staffpick: true,
			reference: "",
			churchgroup: "Seattle/seattle-a2f"},
		]
	},
	methods: {
		// given directory, retrieve the date
		// getDate: function(dir) {
		// 	var arr = dir.split('-');
		// 	return arr[0];
		// }
	}
});
