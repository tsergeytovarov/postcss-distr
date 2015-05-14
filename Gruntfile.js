/*
  Author - Sergey Popov.
  Author URI: http://ourworkspace.ru
  Author social: https://vk.com/sergeytovarov
  Author email: tovarov.piter@gmail.com
  From Saint-Petersburg with love
*/

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 10 version'}).postcss,
          require('csswring').postcss
        ]
      },
      dist: {
        src: 'src/css/*.css'
      }
    }

  });

  // базовый таск
  grunt.registerTask('default', []);
