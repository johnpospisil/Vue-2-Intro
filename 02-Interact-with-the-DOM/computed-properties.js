new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	// 'computed' - a new property. 
	// more efficient than functions. These only run as needed.
	// Results are cached instead of being needlessly recalculated.
	// Use these like a property, not like a function in your HTML file.
	computed: {
		output: function() {
			console.log('Computed');
			return this.secondCounter > 5 ? 'Greater than 5' : '5 or less'; 
		}
	},
	methods: {
		result: function() {
			console.log('Method');
			return this.counter > 5 ? 'Greater than 5' : '5 or less'; 
		}
	}
})