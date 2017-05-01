/*
 * Licensed under the MIT license.
 */


"use strict";

module.exports = function(grunt) {

  var config = {};

  config['project'] ={
    'name'    : 'test',//toto jmeno/nazev bude i na ftp  //BEZ DIAKRITIKY A MEZER!!!!! + VŠECHNO MALÝMI
    'keyword' : 'test',//klicove slovo ktere se propise vsude (css, js, sprity atd) //obvykle name = keyword //BEZ DIAKRITIKY A MEZER!!!!! + VŠECHNO MALÝMI
    'title'   : 'test',//titulek v html sablonach
    'for'     : 'htmlfactory',
    'author'  : 'Vitalij Petras',
  };

  config['bs'] = /*'projekty/nove/'+*/config['project']['name'];//url pro browsersynch

  config['path'] ={
    'root'    : 'dev/',
    'scss'    : 'dev/assets/sass/',
    'css'     : 'dev/assets/css/',
    'js'      : 'dev/assets/js/',
    'sprites' : 'dev/assets/images/sprites/',
    'icons'   : 'dev/assets/icons/',
    'dist'    : 'dist/',
  };

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({

    project : config,

    /* sass */
    sass: {                              // Task
      dev: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap:'none'
        },
        files:   [{  
          expand: true,   
          cwd: '<%= project.path.scss %>',
          src: ['*.scss', '!_*'],                  // Dictionary of files
          dest: '<%= project.path.css %>',
          ext: '.css'
        }]
      }
    },

    /* minifikace css souboru */
    cssmin: {
      dist: {
        options: {
          compatibility: 'ie8',
          aggressiveMerging: false,
        },
        files: [{
          expand: true,
          cwd: '<%= project.path.dist %>',
          src: ['**/*.css', '!*.min.css'],
          dest: '<%= project.path.dist %>',
          //ext: '.css'
        }]
      }
    },

    px_to_rem: {
      dist: {
        options: {
          base: 16,
          fallback: false,
          fallback_existing_rem: false,
          ignore: [],
          map: false
        },
        files: {
          '<%= project.path.dist %>assets/css/global.css': ['<%= project.path.dist %>assets/css/global-rem-fallback.css']
        }
      }
    },

    /* watch */
    watch: {
      options: {
        livereload: true,
        spawn: false,
      },
      //styles
      css: {
        files: '<%= project.path.scss %>**/*.scss',
        tasks: ['sass:dev'],
        // pro nativni prevod do rem jednotek vymenit 'cssmin' za 'rem'
      },
      //png sprite
      pngSprite: {
        files: ['<%= project.path.sprites %>png-sprite/*.png'],
        tasks: ['sprite'],
      },
      //svg sprite
      svgSprite: {
        files: ['<%= project.path.sprites %>svg-sprite/*.{svg,png}'],
        tasks: ['clean:grunticonImages', 'svgmin', 'grunticon', "html_factory_grunticon_finisher", 'sass:dev', 'file_append'],
      },
      //concated js
      concatedScripts: {
        files: ['<%= project.path.js %>concated/*.js'],
        tasks: ['concat:basic', 'uglify:all'],
      },
      //all scripts
      allScripts: {
        files: ['<%= project.path.js %>*.js'],
        tasks: ['uglify:all'],
      },
      //html and php 
      htmlFiles:{
        files: ['<%= project.path.root %>**/*.{php,html}'],
      },

      configFiles: {
        files: [ 'gruntfile.js', 'package.json' ],
        options: {
          reload: true
        }
      }
      
    },

    /* minifikace javascriptu */
    uglify: {
      /*basic: {
        files: [{
          //  config['project']['name']'/js/all.min.js': ['<%= config.project.name %>/js/all.js']
          expand: true,   
          cwd: '<%= project.path.js %>',
          src: ['all.js'],                  // Dictionary of files
          dest: '<%= project.path.js %>',
          ext: '.min.js'
        }]
      },*/
      all: {
        files: [{
          expand: true,
          cwd: '<%= project.path.js %>',
          src: ['*.js', '!*.min.js'],
          dest: '<%= project.path.js %>',
          ext: '.min.js'
        }]
      }
    },

    /* sjednoceni vsech .js souboru do jednoho */
    concat: {
      basic: {
        src: '<%= project.path.js %>concated/*.js', //vstupni slozka
        dest: '<%= project.path.js %>all.js',  //vystupni slozka
      },
    },

    /* svg sprite */
    svg_sprite      : {
      main : {
        cwd         : '<%= project.path.sprites %>svg-sprite/',
        src         : ['*.svg'],
        dest        : '<%= project.path.sprites %>',
        options     : {
          shape:{
            spacing : {  
              padding     : 15
            }, 
          },
          mode       : {
            css      : { 
              bust: false,
              sprite: "../svg-sprite.svg",    
              render      : {
                scss   :{
                  dest        : '../../../sass/1_core/sprites/svg-sprite/_svg-sprite.scss',
                  template: '<%= project.path.scss %>1_core/sprites/svg-sprite/template.handlebars'
                } 
              }
            },      
          }
        } 
      },
    },

    /* svg2png */
    svg2png: {
      svgSpriteFallback: {
        files: [
          { 
            cwd: '<%= project.path.sprites %>', 
            src: ['*.svg'], 
            dest: '<%= project.path.sprites %>',
          }
        ]
      }
    },

    /* png sprite */
    sprite:{
      main: {
        src: '<%= project.path.sprites %>png-sprite/*.png',
        dest: '<%= project.path.icons %>png-sprite.png',
        destCss: '<%= project.path.scss %>1_core/sprites/png-sprite/_png-sprite.scss',
        /*algorithm: 'binary-tree',*/
        padding: 15,
        cssTemplate: '<%= project.path.scss %>1_core/sprites/png-sprite/template.handlebars'
      }
    },

    svgmin: {
      dist: {
          options: {
              plugins: [
                  // Don't remove XML declaration (needed to avoid errors creating PNG on Win 7) 
                  { removeXMLProcInst: false }
              ]
          },
          files: [{
              expand: true,
              cwd: '<%= project.path.sprites %>svg-sprite/',
              src: ['*.svg', '*.png'],
              dest: "<%= project.path.icons %>svg"
          }]
      }
    },

    grunticon: {
      myIcons: {
        files: [{
            expand: true,
            cwd: '<%= project.path.icons %>svg',
            src: ['*.svg', '*.png'],
            dest: "<%= project.path.icons %>"
        }],
        options: {
          enhanceSVG: true,
          cssprefix: ".icon__",
          compressPNG: true,
          template: "<%= project.path.sprites %>grunticon/default-css.hbs",
          /*customselectors: {
            "back": [".test:before"]
          },*/
        }
      }
    },

    copy: {
      templatePHP: {
        options: {
          process: function(content, path) {
            return grunt.template.process(content);
          }
        },
        src: '<%= project.path.root %>homepage.php.tpl',
        dest: '<%= project.path.root %>homepage.php', 
      },
      templateREM: {
        options: {
          process: function(content, path) {
            return grunt.template.process(content);
          }
        },
        src: '<%= project.path.js %>load-css.js',
        dest: '<%= project.path.js %>load-css.js', 
      },
      templateCSS: {
        options: {
          process: function(content, path) {
            return grunt.template.process(content);
          }
        },
        src: '<%= project.path.scss %>global.scss.tpl',
        dest: '<%= project.path.scss %>global.scss', 
      },
      dev: {
        options: {
          
        },
        dot: true,
        expand: true,
        cwd: '<%= project.path.root %>',
        //src: '**',
        src: ['**', '!**/*.php', '!page-components', '!page_components'],
        dest: '<%= project.path.dist %>', 
      },
      remFallback:{
        src: ['<%= project.path.dist %>assets/css/global.css'], 
        dest: '<%= project.path.dist %>assets/css/global-rem-fallback.css'
      }
    },

    clean: {
      templatePHP: [
        '<%= project.path.root %>homepage.php.tpl'
      ],
      templateCSS: [
        '<%= project.path.scss %>global.scss.tpl'
      ],
      grunticonImages: [
        '<%= project.path.icons %>svg', 
        '<%= project.path.icons %>png'
      ],
      dist: [
        '<%= project.path.dist %>**'
      ],
      distFiles: [
        '<%= project.path.dist %>assets/sass', 
        '<%= project.path.dist %>assets/images/sprites',
        '<%= project.path.dist %>assets/js/concated',
        '<%= project.path.dist %>assets/js/critical.js',
        '<%= project.path.dist %>assets/js/critical.min.js',
        '<%= project.path.dist %>assets/js/not-used-scripts',
      ],
      gruntIconLoader: [
        '<%= project.path.icons %>grunticon.loader.js'
      ],
    },

    compress: {
      dist: {
        options: {
          archive: '<%= project.path.dist %>data.zip'
        },
        files: [
          {expand: true, cwd: '<%= project.path.dist %>', src: ['**'], dest:'<%= project.project.name %>'}
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'last 3 versions', 
          'ie >= 8', 
          '> 1%'
        ]
      },
      dist: {  
        // expand:true,
        src: '<%= project.path.dist %>assets/css/global.css',
        dest: '<%= project.path.dist %>assets/css/global.css'
      }
    },

    html_factory_grunticon_finisher: {
        options: {
            pathToPngFile:          config['path']["icons"] + "icons.data.png.css",
            pathToSvgFile:          config['path']["icons"] + "icons.data.svg.css",
            pathToFallbackFile:     config['path']["icons"] + "icons.fallback.css",
            targetPngFile:          config['path']["icons"] + "icons.data.png.css",
            targetSvgFile:          config['path']["icons"] + "icons.data.svg.css",
            targetFallbackFile:     config['path']["icons"] + "icons.fallback.css",
            targetDimensionsFile:   config['path']["scss"] + "1_core/sprites/_grunticon-dimensions.scss"
        },
        html_factory_grunticon_finisher: {
        }
    },

    file_append: {
      gruntIcon: {
        files: [
          {
            append: 'grunticon(["assets/icons/icons.data.svg.css?v="+version+"", "assets/icons/icons.data.png.css?v="+version+"", "assets/icons/icons.fallback.css?v="+version+""], grunticon.svgLoadedCallback );',
            input: '<%= project.path.icons %>grunticon.loader.js',
            output: '<%= project.path.js %>concated/00-grunticon.loader.js'
          }
        ]
      }
    },

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    '<%= project.path.css %>*.css',
                    '<%= project.path.js %>*.js',
                    '<%= project.path.root %>**/*.html',
                    '<%= project.path.root %>**/*.php'
                ]
            },
            options: {
                proxy: 'localhost:80/<%= project.bs %>/<%= project.path.root %>', //our PHP server
                port: 8080, // our new port
                open: true,
                watchTask: true
            }
        }
    },

    php: {
        dev: {
            options: {
                port: 80,
                base: '<%= project.path.root %>'
            }
        }
    },

    tinyimg: {
      all: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '<%= project.path.dist %>',                   // Src matches are relative to this path
          src: ['**/*.svg'],  //{png,jpg,svg} // Actual patterns to match
          dest: '<%= project.path.dist %>'                  // Destination path prefix
        }]
      },
    },

    php2html: {
      dist: {
        options: {
          processLinks: true,// relative links should be renamed from .php to .html 
          htmlhint: false,
        },
        files: [
          {
            expand: true, 
            cwd: '<%= project.path.root %>', 
            src: ['*.php'], 
            dest: '<%= project.path.dist %>', 
            ext: '.html' 
          }
        ]
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: "http://htmlsablony.html-factory.cz/<%= project.project.name %>/",
      },
      desktop: {
        options: {
          paths: ["homepage.html", "index.html"],
          locale: "cs_CZ",
          strategy: "desktop",
          threshold: 80
        }
      },
      mobile: {
        options: {
          paths: ["homepage.html", "index.html"],
          locale: "cs_CZ",
          strategy: "mobile",
          threshold: 65
        }
      }
    },

    'ftp-deploy': {
      htmlfactory: {
        auth: {
          host   : "74506.w6.wedos.net",
          port   : "21",
          authKey: '<%= project.project.for %>'
        },
        dot: true,
        src: '<%= project.path.dist %>',         // local path
        dest: '<%= project.project.name %>', //path on ftp
      },
      honza: {
        auth: {
          host    : "127799.w99.wedos.net",
          port    : 21,
          authKey: '<%= project.project.for %>'
        },
        dot: true,
        src: '<%= project.path.dist %>',         // local path
        dest: '<%= project.project.name %>', //path on ftp
        //http://www.praguecoding.eu/projects2/
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-svg2png');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-px-to-rem');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-html-factory-grunticon-finisher');
  grunt.loadNpmTasks('grunt-file-append');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-tinyimg');
  grunt.loadNpmTasks('grunt-php2html');
  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('svg', ['clean:grunticonImages', 'svgmin', 'grunticon', "html_factory_grunticon_finisher", 'sass:dev', 'file_append']);

  grunt.registerTask('png', ['sprite', 'sass:dev']);

  grunt.registerTask('default', ['php', 'browserSync', 'watch']);

  grunt.registerTask('rem', ['copy:remFallback', 'px_to_rem']);

  grunt.registerTask('oimages', ['tinyimg']);

  grunt.registerTask('convert2html', ['php2html']);

  grunt.registerTask('template', [
    'copy:templateREM',                            //css a rem fallback
    'copy:templateCSS', 'clean:templateCSS',       //prejmenovat globalni CSS a odstranit template
    'copy:templatePHP', 'clean:templatePHP',       //doplnit cesty na homepage a odstranit template
  ]);

  grunt.registerTask('update', ['concat:basic', 'uglify:all', /*'svg', 'png',*/ 'sass:dev']);

  grunt.registerTask('build', [
    'update',
    'clean:dist', 'copy:dev', 
    'convert2html', 
    'clean:distFiles', 
    'autoprefixer:dist', 'cssmin:dist', 'rem',
    'oimages'
  ]);// 'ftp-deploy:'+config['project']['for']


  grunt.registerTask('send', ['build', 'compress', 'ftp-deploy:'+config['project']['for']]);


  grunt.registerTask('pagetest', ['pagespeed']);



};

