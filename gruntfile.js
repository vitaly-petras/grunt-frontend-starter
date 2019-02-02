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
  var ftpPass = passwords && passwords["ftp"] ? passwords["ftp"] : false;
  //grunt.log.write(grunt.file.exists(".tinypng-key") && grunt.file.readJSON(".tinypng-key"));
  const tinyPngKey = grunt.file.exists(".tinypng-key") && grunt.file.readJSON(".tinypng-key");

  config["path"] = {
    virtual: "virtual/",
    root: "dev/",
    scss: "assets/sass/",
    css: "assets/css/",
    js: "assets/js/",
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
            cwd: "<%= project.path.root %><%= project.path.scss %>",
            src: ["*.scss", "!_*"], // Dictionary of files
            dest: "<%= project.path.virtual %><%= project.path.css %>",
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
      css: {
        files: "<%= project.path.root %><%= project.path.scss %>**/*.scss",
        tasks: ["sass:dev", "postcss:dev"]
      },
      js: {
        files: ["<%= project.path.root %><%= project.path.js %>*.js"],
        tasks: ["javascript"]
      },
      html: {
        files: ["<%= project.path.root %>**/*.{php,html}"],
        tasks: ["preprocess"]
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
      target: {
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
      target: {
        src: [
          //vstupni soubory
          "node_modules/jquery/dist/jquery.js",
          "node_modules/slick-carousel/slick/slick.js",
          "node_modules/object-fit-images/dist/ofi.js",
          "<%= project.path.root %><%= project.path.js %>*.js"
        ],
        //vystupni soubor
        dest: "<%= project.path.virtual %><%= project.path.js %>all.js"
      }
    },

    jshint: {
      all: ["<%= project.path.root %><%= project.path.js %>**/*.js"]
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      dist: {
        files: {
          "<%= project.path.virtual %><%= project.path.js %>all.js":
            "<%= project.path.virtual %><%= project.path.js %>all.js"
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
        src: "<%= project.path.root %><%= project.path.scss %>global.scss.tpl",
        dest: "<%= project.path.root %><%= project.path.scss %>global.scss"
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
      templateCSS: ["<%= project.path.root %><%= project.path.scss %>global.scss.tpl"],
      dist: ["<%= project.path.dist %>data.zip"],
      distFiles: {
        files: [
          {
            expand: true,
            cwd: "<%= project.path.dist %>",
            src: ["assets/sass", "assets/images/sprites", "assets/js/not-used-scripts", "assets/js/*.map", "assets/icons"], // Dictionary of files
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
            require("postcss-flexbugs-fixes"),
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
            require("cssnano")()
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
        src: "<%= project.path.virtual %><%= project.path.css %>global.css",
        dest: "<%= project.path.virtual %><%= project.path.css %>global.css"
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "<%= project.path.virtual %><%= project.path.css %>*.css",
            "<%= project.path.virtual %><%= project.path.js %>*.js",
            "<%= project.path.virtual %>**/*.html"
          ]
        },
        options: {
          open: true,
          watchTask: true,
          startPath: "rozcestnik.html",
          scrollProportionally: false,
          server: {
            baseDir: "<%= project.path.virtual %>"
          }
        }
      }
    },

    tinypng: {
      options: {
        apiKey: tinyPngKey,
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
            cwd: "<%= project.path.root %>images/", // Src matches are relative to this path
            src: ["**/*.{png,jpg}"], // Actual patterns to match
            dest: "<%= project.path.virtual %>images/" // Destination path prefix
          }
        ]
      }
    },

    imagemin: {
      options: {
        use: [
          //png
          require("imagemin-pngquant")({
            speed: 1,
            quality: [0, 0.98] //lossy settings
          }),
          require("imagemin-zopfli")({
            more: true
          }),
          require("imagemin-giflossy")({
            optimizationLevel: 3,
            optimize: 3, //keep-empty: Preserve empty transparent frames
            lossy: 2
          }),
          //svg
          require("imagemin-svgo")({
            plugins: [
              {
                removeViewBox: false
              }
            ]
          }),
          //jpg lossless
          require("imagemin-jpegtran")({
            progressive: true
          }),
          //jpg very light lossy, use vs jpegtran
          require("imagemin-mozjpeg")({
            quality: 90
          })
        ]
      },
      all: {
        files: [
          {
            expand: true,
            cwd: "<%= project.path.root %>images/",
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: "<%= project.path.virtual %>images/"
          }
        ]
      },
      no_jpg_png: {
        files: [
          {
            expand: true,
            cwd: "<%= project.path.root %>images/",
            src: ["**/*.{gif,svg}"],
            dest: "<%= project.path.virtual %>images/"
          }
        ]
      }
    },

    preprocess: {
      options: {
        context: {
          DEBUG: true
          //version: grunt.file.read("version.properties")
        }
        //srcDir: "<%= project.path.root %>"
      },
      all_from_dir: {
        cwd: "<%= project.path.root %>",
        src: ["*.html"],
        dest: "<%= project.path.virtual %>",
        expand: true,
        ext: ".html"
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

  grunt.registerTask("oimages", () =>
    tinyPngKey ? grunt.task.run("tinypng", "imagemin:no_jpg_png") : grunt.task.run("imagemin:all")
  );

  grunt.registerTask("template", [
    "copy:templateCSS",
    "clean:templateCSS", //prejmenovat globalni CSS a odstranit template
    "copy:templatePHP",
    "clean:templatePHP" //doplnit cesty na homepage a odstranit template
  ]);

  grunt.registerTask("update", ["javascript", "sass:dev", "preprocess", "postcss:dev"]);

  grunt.registerTask("javascript", ["jshint", "concat", "babel"]);

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
    "preprocess",
    "copy:phpAnchorLinksToHTML",
    "clean:distFiles",
    "postcss:dist",
    "uglify",
    "oimages"
  ]);

  grunt.registerTask("default", ["update", "browserSync", "watch"]);
};
