path = require('path');
ejs  = require('ejs');

getFileHeader = function(grunt, pkg) {
	return ejs.render(grunt.file.read("src/header.txt", 'utf8'), {
		"version" : pkg.version,
		"date" : new Date().toUTCString()
	});
}

module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			options: {
				banner: '<%= getFileHeader(grunt, pkg) %>'
			},
			dist : {
				files : grunt.file.expandMapping(['**/*.js'], 'release/', {
					cwd : "src",
					rename : function(destBase, matchedSrcPath) {
						return path.join(destBase, matchedSrcPath).replace('.js', '.min.js');
					}
				})
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};