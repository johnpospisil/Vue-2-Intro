new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	// 'computed' properties 
	// more efficient than functions or watch. These only run as needed.
	// Results are cached instead of being needlessly recalculated.
	// Runs Synchronously.
	// Use these like a property, not like a function in your HTML file.
	computed: {
		output: function() {
			console.log('Computed');
			return this.secondCounter > 5 ? 'Greater than 5' : '5 or less'; 
		}
	},
	//'watch' - a new property.
	// Runs Asynchronously
	// These run when a specified property changes. Below 'counter' is specified.
	// counter is reset to '0' two seconds after the counter is first changed.
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	},
	methods: {
		result: function() {
			console.log('Method');
			return this.counter > 5 ? 'Greater than 5' : '5 or less'; 
		}
	}
})