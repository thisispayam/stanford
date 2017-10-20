module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: true
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    // Tasks
      sass: { // Begin Sass Plugin
        dist: {
          options: {
            sourcemap: 'none'
          },
          files: [{
            expand: true,
            cwd: 'sass',
            src: ['**/*.scss'],
            dest: 'css',
            ext: '.css'
        }]
        }
      },
      cssmin: { // Begin CSS Minify Plugin
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['style.css', '!style.min.css'],
            dest: 'css',
            ext: '.min.css'
      }]
        }
      },
      autoprefixer:{
            dist:{
              files:{
                'css/style.css':'css/style.css'
              }
            }
      },
      concat: {
        options: {
          separator: '',
        },
        dist: {
          src: ['js/modules/menu.js', 'js/modules/video.js', 'js/modules/functions.js'],
          dest: 'js/src/script.js',
        },
      },
      uglify: { // Begin JS Uglify Plugin
        build: {
          src: ['js/src/script.js'],
          dest: 'js/src/script.min.js'
        }
      },
      watch: { // Compile everything into one task with Watch Plugin
        css: {
          files: '**/*.scss',
          tasks: ['sass', 'autoprefixer', 'cssmin']
        },
        js: {
          files: '**/*.js',
          tasks: ['uglify', 'concat']
        }
      }
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
  };
