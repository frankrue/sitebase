module.exports = function(grunt) {
 
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: './source'
        }
      }
    },
    watch: {
      server: {
        files: ['source/index.html','source/css/*.css','source/js/**/*.js'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      css: {
        files: ['source/css/**/*.scss'],
        tasks: ['sass:dev'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          debounceDelay: 250,
          spawn: false
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourceComments: 'map'
        },
        files: [{
          expand: true,
          cwd: 'source/css',
          src: ['main.scss'],
          dest: 'source/css',
          ext: '.css',
        }]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'source/css',
          src: ['main.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }      
    },
    open: {
      all: {
        path: 'http://localhost:<%= connect.server.options.port%>',
        app: 'Google Chrome'
      }
    },
    parallel: {
      web: {
        options: {
          stream: true,
          grunt: true
        },
        tasks: [
          'watch:server',
          'watch:css',
          'watch:scripts',
          'beep:error'
        ]
      }
    },
    bower: {
      target: {
        baseUrl: 'source/js',
        rjsConfig: 'source/js/config.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile:'source/js/config.js',
          baseUrl: 'source/js/app',
          name: 'almond',
          include: ['app'],
          insertRequire: ['app'],
          out: 'build/js/main.min.js',
          wrap: true,
          optimize: 'uglify2',
          logLevel: 0,
          findNestedDependencies: true,
          fileExclusionRegExp: /^\./,
          inlineText: true
        }
      }
    },
    processhtml: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'source/',
            src: ['*'],
            dest: 'build/',
            flatten: true,
            filter: 'isFile'
          }
        ]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true, 
            cwd: 'source/i',
            src: ['**'], 
            dest: 'build/i/'
          },
          {
            expand: true, 
            cwd: 'source/fonts',
            src: ['**'], 
            dest: 'build/fonts/'
          },
          {
            expand: true, 
            cwd: 'source/inc',
            src: ['**'], 
            dest: 'build/inc/'
          }
        ]
      }
    },
    jsonlint: {
      scripts: {
        src: [ 'js/app/**/*.json' ]
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'source/js/config.js', 'source/js/app/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          strict: true,
          smarttabs: true,
          trailing: true
        }
      }
    },
  });

  grunt.registerTask('live', [
    'sass:dev',
    'parallel:web'
  ]);

  grunt.registerTask('server', [
    'sass:dev',
    'connect',
    'open',
    'parallel:web'
  ]);

  grunt.registerTask('build', [
    'processhtml:dist',
    'copy:dist',
    'sass:dist',
    'requirejs'
  ]);
};