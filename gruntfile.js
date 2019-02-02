/*
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
  var config = {};

  config["project"] = {
    name: "fill-me", //BEZ DIAKRITIKY A MEZER!!!!! + VŠECHNO MALÝMI
    title: "fill-me", //titulek v html sablonach
    for: "htmlfactory", //praguecoding
    author: "Vitalij Petras"
  };

  var passwords = grunt.file.exists("passwords.json") ? grunt.file.readJSON("passwords.json") : false;
  var tinyPngPass = passwords && passwords["tinypng"] ? passwords["tinypng"] : false;
  var ftpPass = passwords && passwords["ftp"] ? passwords["ftp"] : false;
  //grunt.log.write(passwords);

  config["path"] = {
    root: "dev/",
    scss: "dev/assets/sass/",
    css: "dev/assets/css/",
    js: "dev/assets/js/",
    images: "dev/images/svg/",
    icons: "dev/assets/icons/",
    dist: "dist/"
  };

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    project: config,

    /* sass */
    sass: {
      // Task
      dev: {
        // Target
        options: {
          // Target options
          style: "expanded",
          sourcemap: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= project.path.scss %>",
            src: ["*.scss", "!_*"], // Dictionary of files
            dest: "<%= project.path.css %>",
            ext: ".css"
          }
        ]
      }
    },

    /* watch */
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      //styles
      css: {
        files: "<%= project.path.scss %>**/*.scss",
        tasks: ["sass:dev", "postcss:dev"]
      },
      //svg sprite
      svgSprite: {
        files: ["<%= project.path.icons %>**/*.svg"],
        tasks: ["svg"],
        options: {
          reload: true
        }
      },
      //concated js
      concatedScripts: {
        files: ["<%= project.path.js %>concated/*.js"],
        tasks: ["concat:basic", "babel"]
      },
      /*
      //all scripts
      allScripts: {
        files: ['<%= project.path.js %>*.js'],
        tasks: ['uglify:all'],
      },
      */
      //html and php
      htmlFiles: {
        files: ["<%= project.path.root %>**/*.{php,html}"]
      },

      configFiles: {
        files: ["gruntfile.js", "package.json"],
        options: {
          reload: true
        }
      }
    },

    /* minifikace javascriptu */
    uglify: {
      all: {
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>/assets/js/",
            src: ["*.js", "!*.min.js"],
            dest: "<%= project.path.dist %>/assets/js/"
          }
        ]
      }
    },

    /* sjednoceni vsech .js souboru do jednoho */
    concat: {
      basic: {
        src: [
          //vstupni slozka
          "node_modules/jquery/dist/jquery.js",
          "node_modules/slick-carousel/slick/slick.js",
          "node_modules/object-fit-images/dist/ofi.js",
          "<%= project.path.js %>concated/*.js"
        ],
        dest: "<%= project.path.js %>all.js" //vystupni slozka
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      dist: {
        files: {
          "<%= project.path.js %>all.js": "<%= project.path.js %>all.js"
        }
      }
    },

    svgstore: {
      options: {
        prefix: "icon-" // This will prefix each ID
      },
      all: {
        files: {
          "<%= project.path.images %>/all.svg": ["<%= project.path.icons %>all/*.svg"]
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
        src: "<%= project.path.root %>index.php.tpl",
        dest: "<%= project.path.root %>index.php"
      },
      templateCSS: {
        options: {
          process: function(content, path) {
            return grunt.template.process(content);
          }
        },
        src: "<%= project.path.scss %>global.scss.tpl",
        dest: "<%= project.path.scss %>global.scss"
      },
      htaccess: {
        src: ["<%= project.path.dist %>_htaccess"],
        dest: "<%= project.path.dist %>.htaccess"
      },
      phpAnchorLinksToHTML: {
        options: {
          process: function(content, path) {
            return content.replace(/.php#/gi, ".html#");
            //return content.replace(/[sad ]/g, '_');
          }
        },
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>",
            src: ["**/*.html"],
            dest: "<%= project.path.dist %>"
          }
        ]
      }
    },

    sync: {
      dist: {
        files: [
          {
            cwd: "<%= project.path.root %>",
            src: ["**", "!**/*.php", "!page-components", "!page_components", "!assets/images/sprites/**", "forms/*.php"],
            dest: "<%= project.path.dist %>"
          } // makes all src relative to cwd
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
        ignoreInDest: ["data.zip", "**/*.php", "page-components", "page_components", ".htaccess"], // Never remove js files from destination. Default: none
        updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "mtime" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"
      }
    },

    clean: {
      templatePHP: ["<%= project.path.root %>index.php.tpl"],
      templateCSS: ["<%= project.path.scss %>global.scss.tpl"],
      dist: ["<%= project.path.dist %>data.zip"],
      distFiles: {
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>",
            src: [
              "assets/sass",
              "assets/images/sprites",
              "assets/js/concated",
              "assets/js/not-used-scripts",
              "assets/js/*.map",
              "assets/icons"
            ], // Dictionary of files
            dest: "<%= project.path.dist %>"
          }
        ]
      },
      gruntIconLoader: ["<%= project.path.icons %>grunticon.loader.js"],
      htaccess: ["<%= project.path.dist %>_htaccess"]
    },

    compress: {
      dist: {
        options: {
          archive: "<%= project.path.dist %>data.zip"
        },
        files: [{ expand: true, cwd: "<%= project.path.dist %>", src: ["**"], dest: "<%= project.project.name %>" }]
      }
    },

    postcss: {
      dist: {
        options: {
          map: false,
          processors: [
            require("autoprefixer"),
            require("postcss-object-fit-images"),
            require(`postcss-pxtorem`)({
              rootValue: 16,
              unitPrecision: 5,
              propList: ["*", "!border", "!border-left", "!border-top", "!border-bottom", "!border-right"],
              selectorBlackList: [],
              replace: true,
              mediaQuery: true,
              minPixelValue: 0
            }),
            require('cssnano')()
          ]
        },
        src: "<%= project.path.dist %>assets/css/global.css",
        dest: "<%= project.path.dist %>assets/css/global.css"
      },
      dev: {
        options: {
          map: true,
          processors: [require("postcss-object-fit-images")]
        },
        src: "<%= project.path.css %>global.css",
        dest: "<%= project.path.css %>global.css"
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "<%= project.path.css %>*.css",
            "<%= project.path.js %>*.js",
            "<%= project.path.root %>**/*.html",
            "<%= project.path.root %>**/*.php"
          ]
        },
        options: {
          proxy: "127.0.0.1:8010", //our PHP server
          port: 8080, // our new port
          open: true,
          watchTask: true,
          startPath: "rozcestnik.php"
          //notify: false
        }
      }
    },

    php: {
      dev: {
        options: {
          port: 8010,
          base: "<%= project.path.root %>"
          //keepalive: true,
          //open: true
        }
      }
    },

    tinyimg: {
      all: {
        files: [
          {
            expand: true, // Enable dynamic expansion
            cwd: "<%= project.path.dist %>", // Src matches are relative to this path
            src: ["**/*.svg", "!images/svg/*.svg"], //{png,jpg,svg} // Actual patterns to match
            dest: "<%= project.path.dist %>" // Destination path prefix
          }
        ]
      }
    },

    tinypng: {
      options: {
        apiKey: tinyPngPass,
        sigFile: ".tinypng.json",
        checkSigs: true,
        summarize: true,
        showProgress: true,
        stopOnImageError: true
      },
      compress: {
        files: [
          {
            expand: true, // Enable dynamic expansion
            cwd: "<%= project.path.dist %>", // Src matches are relative to this path
            src: ["**/*.{png,jpg}", "!assets/icons/**", "!assets/favicons/**"], // Actual patterns to match
            dest: "<%= project.path.dist %>" // Destination path prefix
          }
        ]
      }
    },

    php2html: {
      dist: {
        options: {
          processLinks: true, // relative links should be renamed from .php to .html
          htmlhint: false
        },
        files: [
          {
            expand: true,
            cwd: "<%= project.path.root %>",
            src: ["*.php", "!checklist.php", "!forms/*.php"],
            dest: "<%= project.path.dist %>",
            ext: ".html"
          }
        ]
      }
    },

    ftp_push: {
      htmlfactory: {
        options: {
          host: "170632.w32.wedos.net",
          port: 21,
          username: ftpPass ? ftpPass["htmlfactory"]["username"] : null,
          password: ftpPass ? ftpPass["htmlfactory"]["password"] : null,
          dest: "<%= project.project.name %>"
        },
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>", // local path
            src: ["**/*", ".htaccess"]
          }
        ]
      },
      praguecoding: {
        options: {
          host: "127799.w99.wedos.net",
          port: 21,
          username: ftpPass ? ftpPass["praguecoding"]["username"] : null,
          password: ftpPass ? ftpPass["praguecoding"]["password"] : null,
          dest: "<%= project.project.name %>"
        },
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>", // local path
            src: ["**/*", ".htaccess"]
          }
        ]
      }
    }
  });

  /*
  tasks
  */

  grunt.registerTask("svg", ["svgstore"]);
  /*
  grunt.registerTask('oimages', function(){
    if(tinyPngPass) return ['tinyimg', 'tinypng']
    else{
      grunt.log.write('no APIKEY for tinypng, this task will be skipped, but dont worry all is OK. (only jpg and png images will not be compressed)');
      return ['tinyimg'];
    }
  });
  */
  grunt.registerTask("oimages", function() {
    if (tinyPngPass) grunt.task.run("tinyimg", "tinypng");
    else {
      grunt.log.write(
        "no APIKEY for tinypng, this task will be skipped, but dont worry all is OK. (only jpg and png images will not be compressed)"
      );
      grunt.task.run("tinyimg");
    }
  });

  grunt.registerTask("template", [
    "copy:templateCSS",
    "clean:templateCSS", //prejmenovat globalni CSS a odstranit template
    "copy:templatePHP",
    "clean:templatePHP" //doplnit cesty na homepage a odstranit template
  ]);

  grunt.registerTask("update", ["javascript", "svg", "sass:dev", "postcss:dev"]);

  grunt.registerTask("javascript", ["concat:basic", "babel"]);

  grunt.registerTask("ftp", function() {
    if (ftpPass) grunt.task.run("compress", "ftp_push:" + config["project"]["for"]);
    else grunt.fail.warn("No ftp accesses. You cant send files. Please use build task.");
  });

  grunt.registerTask("send", ["build", "ftp"]);

  grunt.registerTask("build", [
    //pouzijte tuto funkci pro vygenerovani DIST souboru
    "update",
    "clean:dist",
    "sync:dist",
    "copy:htaccess",
    "clean:htaccess",
    "php2html",
    "copy:phpAnchorLinksToHTML",
    "clean:distFiles",
    "postcss:dist",
    "uglify",
    "oimages"
  ]);

  grunt.registerTask("default", ["update", "php", "browserSync", "watch"]);
};
