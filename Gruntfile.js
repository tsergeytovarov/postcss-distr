/*
  Author - Sergey Popov.
  Author URI: http://ourworkspace.ru
  Author social: https://vk.com/sergeytovarov
  Author email: tovarov.piter@gmail.com
  From Saint-Petersburg with love
*/

module.exports = function(grunt) {

  // вызываем все таски стандартные
  require('load-grunt-tasks')(grunt);

  // обзываем автопрефиксер переменной
  var autoprefixer = require('autoprefixer-core');

  grunt.initConfig({

    postcss: {
      options: {
        map: true,
        processors: [
          autoprefixer({browsers: 'last 10 version'}).postcss //вызов автопрефиксера над css файлом
        ]
      },
      dist: {
        src: 'src/css/*.css'
      }
    }

  });

  // базовый таск
  grunt.registerTask('default', ['postcss']);

}
