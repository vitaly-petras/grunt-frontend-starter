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
    'author'  : 'Vitalij Petras'
  };

  config['path'] ={
    'root'    : 'development/',
    'scss'    : 'development/assets/sass/',
    'css'     : 'development/assets/css/',
    'js'      : 'development/assets/js/',
    'sprites' : 'development/assets/images/sprites/',
    'send_folder' : 'send-project/',
  };

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({

    project : config,

    /* sass */
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap:'none'
        },
        /*files: {                         // Dictionary of files
          'project/styles/css/global.css': 'project/styles/sass/global.scss', // 'destination': 'source'
          'project/styles/css/print.css': 'project/styles/sass/print.scss', // 'destination': 'source'
          'project/styles/css/noscript.css': 'project/styles/sass/noscript.scss',
        }*/
        files:   [{  
          expand: true,   
          cwd: '<%= project.path.scss %>',
          src: ['*.scss', '!_*'],                  // Dictionary of files
          dest: '<%= project.path.css %>uncompressed/',
          ext: '.css'
          //['staves2/styles/sass/*.scss', 'staves2/styles/sass/!_*.scss']
        }]
      }
    },

    /* minifikace css souboru */
    cssmin: {
      target: {
        options: {
          compatibility: 'ie8',
          aggressiveMerging: false,
        },
        files: [{
          expand: true,
          cwd: '<%= project.path.css %>uncompressed/',
          src: ['*.css', '!*.min.css'],
          dest: '<%= project.path.css %>',
          ext: '.css'
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
          '<%= project.path.css %>global.css': ['<%= project.path.css %>global-rem-fallback.css']
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
        tasks: ['sass', 'autoprefixer', 'cssmin'],//, 'rem'
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
        tasks: ['clean:grunticonSVG', 'clean:grunticonPNG', 'svgmin', 'grunticon'],
        
        //tasks: ['svg_sprite', 'svg2png'],
      },
      //basic web scripts
      basicScripts: {
        files: ['<%= project.path.js %>concated/*.js'],
        tasks: ['concat:basic', 'uglify:basic'],
      },
      //basic web scripts
      ieFixScripts: {
        files: ['<%= project.path.js %>iefix/*.js'],
        tasks: ['concat:ieFix', 'uglify:ieFix'],
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
      //my_target: {
      //  files: [{
      //      expand: true,
      //      cwd: 'src',
      //      src: '**/*.js',
      //      dest: 'dest'
       // }]
      //}
      basic: {
        files: [{
          //  config['project']['name']'/js/all.min.js': ['<%= config.project.name %>/js/all.js']
          expand: true,   
          cwd: '<%= project.path.js %>',
          src: ['all.js'],                  // Dictionary of files
          dest: '<%= project.path.js %>',
          ext: '.min.js'
        }]
      },
      ieFix: {
        files: [{
          //  'development/js/iefix.min.js': ['<%= config.project.name %>/js/iefix.js']
          expand: true,   
          cwd: '<%= project.path.js %>',
          src: ['iefix.js'],                  // Dictionary of files
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
      ieFix: {
        src: [
            '<%= project.path.js %>iefix/html5.js', 
            '<%= project.path.js %>iefix/respond.js',
          ], //vstupni slozka
        dest: '<%= project.path.js %>iefix.js',  //vystupni slozka
      }
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
        dest: '<%= project.path.sprites %>png-sprite.png',
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
              dest: "<%= project.path.sprites %>/grunticon/svg"
          }]
      }
    },

    grunticon: {
      myIcons: {
        files: [{
            expand: true,
            cwd: '<%= project.path.sprites %>grunticon/svg',
            src: ['*.svg', '*.png'],
            dest: "<%= project.path.sprites %>/grunticon"
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

    rename: {
      remFallback: {
        files: [
          {
            src: ['<%= project.path.css %>global.css'], 
            dest: '<%= project.path.css %>global-rem-fallback.css'
          },
        ]
      },
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
      project: {
        options: {
          
        },
        expand: true,
        cwd: '<%= project.path.root %>',
        src: '**',
        dest: '<%= project.path.send_folder %>', 
      },
    },

    clean: {
      templatePHP: [
        '<%= project.path.root %>homepage.php.tpl'
      ],
      templateCSS: [
        '<%= project.path.scss %>global.scss.tpl'
      ],
      grunticonSVG: [
        '<%= project.path.sprites %>/grunticon/svg'
      ],
      grunticonPNG: [
        '<%= project.path.sprites %>/grunticon/png'
      ],
      sass: [
        '<%= project.path.send_folder %>assets/sass'
      ],
      project: [
        '<%= project.path.send_folder %>**'
      ],
    },

    compress: {
      project: {
        options: {
          archive: '<%= project.path.send_folder %>data.zip'
        },
        files: [
          {expand: true, cwd: '<%= project.path.send_folder %>', src: ['**'], dest:'<%= project.project.name %>'}
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 8', '> 1%']
      },
      dev: {  
        // expand:true,
        src: '<%= project.path.css %>uncompressed/global.css',
        dest: '<%= project.path.css %>uncompressed/global.css'
      }
    },

    'ftp-deploy': {
      htmlfactory: {
        auth: {
          host: '74506.w6.wedos.net',
          port: 21,
          username: 'w74506_htmlsablony2',
          password: 'E^7g48Jz%'
        },
        src: '<%= project.path.send_folder %>',         // local path
        dest: '<%= project.project.name %>', //path on ftp
      },
      madeo: {
        auth: {
          host: 'ftp.madeo.cz',
          port: 21,
          username: 'vitalij',
          password: 'bumpycart29'
        },
        src: './development',         // local path
        dest: '<%= project.project.name %>', //path on ftp
      },
      honza: {
        auth: {
          host: '127799.w99.wedos.net',
          port: 21,
          username: 'w127799_projects2',
          password: 'lkD9220dk-pc'
        },
        src: '<%= project.path.send_folder %>',         // local path
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
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-px-to-rem');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('svg', ['clean:grunticonSVG', 'clean:grunticonPNG', 'svgmin', 'grunticon']);

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('rem', ['rename:remFallback', 'px_to_rem']);

  grunt.registerTask('template', [
    'copy:templateREM',                            //css a rem fallback
    'copy:templateCSS', 'clean:templateCSS',       //prejmenovat globalni CSS a odstranit template
    'copy:templatePHP', 'clean:templatePHP',       //doplnit cesty na homepage a odstranit template
  ]);

  //grunt.registerTask('ftp', ['ftp-deploy:'+config['project']['for']]);

  grunt.registerTask('send', ['clean:project', 'copy:project', 'clean:sass', 'compress:project', 'ftp-deploy:'+config['project']['for']]);
  
  //grunt.registerTask('convertSvg', ['svg2png:svgImages']);

  //grunt.registerTask('js', ['concat', 'uglify']);


};

