// ROUTING TEMPLATES

const Dashboard = Vue.extend({ 
	template: '#dashboard',
	data: function() {
		return {
			// https://jsbin.com/bikadol/7/edit?html,js,output
			designs: this.$parent.designs
		}
	}
});

const Design = Vue.extend({ 
	template: '<div>Design {{ $route.params.id }}</div>',
	data: function() {
		return {
			// https://jsbin.com/bikadol/7/edit?html,js,output
			designs: this.$parent.designs
		}
	}
});

// ROUTER CONTROLLER

const router = new VueRouter({
	routes: [
		{ path: '/', component: Dashboard},
		{ path: '/design', component: Design},
		{ path: '/design/:id', component: Design}
	]
});

// BASIC COMPONENTS

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

// APP

var app = new Vue({
	router,
	data: {
		designs: [
			
			// PLACE ADDITIONAL _INFO.json FILES TO THIS LIST (NEWEST FIRST!):
			
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
	}
}).$mount('#app');
