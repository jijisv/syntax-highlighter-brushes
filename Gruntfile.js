path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
      	 files: grunt.file.expandMapping(['**/*.js'], 'release/', {
      	 	cwd: "src",
            rename: function(destBase, matchedSrcPath) {
                return path.join(destBase, matchedSrcPath).replace('.js', '.min.js');
            }
        })
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};