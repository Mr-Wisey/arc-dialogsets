'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var jsFileList = [
    'js/_*.js',
    'js/plugins/*.js',
  ];

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/*.js',
        '!js/scripts.js'
      ]
    },
    sass: {                              // Task
        dev: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'css/dialogsets.css': 'sass/dialogsets.scss'       // 'destination': 'source'
          }
        },
        build: {                            // Target
          options: {                       // Target options
            style: 'compressed'
          },
          files: {                         // Dictionary of files
            'css/dialogsets.min.css': 'sass/dialogsets.scss'       // 'destination': 'source'
          }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: 'js/scripts.js',
      },
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [jsFileList]
        }
      }
    },
    watch: {
      sass: {
        files: [
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/**/**/*.scss'
        ],
        tasks: ['sass:dev']
      },
      js: {
        files: [
          jsFileList
        ],
        tasks: ['concat']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/dialogsets.css',
          'js/scripts.js'
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'jshint',
    'sass:dev',
    'concat'
  ]);
  grunt.registerTask('build', [
    'jshint',
    'sass:build',
    'uglify',
  ]);
};
