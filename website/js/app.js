// ROUTING TEMPLATES

const Dashboard = Vue.extend({ 
	template: '#dashboard',
	data: function() {
		return {
			// https://vuejsfeed.com/blog/building-a-vue-2-0-app-using-vue-router
			// https://jsbin.com/bikadol/7/edit?html,js,output
			designs: this.$parent.designs
		}
	}
});

const Design = Vue.extend({ 
	template: '#design-page',
	// '<div>Design {{ $route.params.church }} {{ $route.params.group }} {{ $route.params.dir }}</div>',
	data: function() {
		return {
			current: _.findWhere(this.$parent.designs, {directory: this.$route.params.dir, churchgroup: this.$route.params.church + '/' + this.$route.params.group})
		}
	},
	methods: {
		addGP: function() {
			return '/Gracepoint' + this.$route.fullPath;
		},
		getThumb: function() {
			 return this.addGP() + '/_thumb.jpg';
		},
		getGithubUrl: function() {
			// https://github.com/abeyang/Gracepoint-Design/tree/gh-pages/Gracepoint/Seattle/seattle-a2f/20160822-BoardgameNight
			return 'https://github.com/abeyang/Gracepoint-Design/tree/gh-pages/' + this.addGP();
		}
	}
});

// ROUTER CONTROLLER

const router = new VueRouter({
	routes: [
		{ path: '/', component: Dashboard},
		{ path: '/:church/:group/:dir', component: Design}
	]
});

// BASIC COMPONENTS

Vue.component('design-card', {
	props: ['design'],
	template: '#design-card',
	methods: {
		getPageUrl: function() {
			return '/' + this.design.churchgroup + '/' + this.design.directory;
		},
		getFullUrl: function() {
			return '/Gracepoint' + this.getPageUrl();
		},
		getThumb: function() {
			return this.getFullUrl() + '/_thumb.jpg';
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
