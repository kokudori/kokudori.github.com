module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			'app.js': [
				'components/jquery/jquery.js',
				'components/bootstrap/docs/assets/js/bootstrap.js',
				'js/index.js'
			],
			'app.css': [
				'components/bootstrap/docs/assets/css/bootstrap.css',
				'components/bootstrap/docs/assets/css/bootstrap-responsive.css',
				'css/index.css'
			]
		},
		uglify: {
			all: {
				files: {
					'app.js': ['app.js']
				}
			}
		},
		jshint: {
			files: ['js/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('build', ['jshint', 'concat']);
	grunt.registerTask('default', ['build', 'uglify']);
};