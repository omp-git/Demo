module.exports = function(grunt) {

	"use strict";

	// Initialize configuration object
	grunt.initConfig({

		// Define configuration for each task
		less: {
			development: {
				options: {
					compress: true  ,// Minification
					optimization: 1
				},
				files: {
					// Compile style.less into style.css
					"dist/css/style.css" : "src/less/Modules/style.less"
				}
			}
		},
		watch: {
			less: {
				// Watched files
				files: ['src/less/**/*.less',],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		},
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner: '/*\n <%= pkg.name %>  \n */ \n'
            },
            build:{
                files:{
                    'dist/js/bootstrap.min.js': 'src/js/bootstrap.js'
                }
            }
        }
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	// Set default task
	grunt.registerTask('default', ['uglify','watch']);

};
