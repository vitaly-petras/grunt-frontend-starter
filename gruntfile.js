/*
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
  const tinyPngKey = grunt.file.exists(".tinypng-key") && grunt.file.readJSON(".tinypng-key");
  //grunt.log.write(tinyPngKey);

  const path = {
    development: "dev/",
    scss: "assets/sass/",
    images: "images/",
    css: "assets/css/",
    js: "assets/js/",
    public: "public/"
  };

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    path: path,

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
            cwd: "<%= path.development %><%= path.scss %>",
            src: ["*.scss", "!_*"], // Dictionary of files
            dest: "<%= path.public %><%= path.css %>",
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
        files: "<%= path.development %><%= path.scss %>**/*.scss",
        tasks: ["sass:dev", "postcss:dev"]
      },
      js: {
        files: ["<%= path.development %><%= path.js %>*.js"],
        tasks: ["javascript"]
      },
      html: {
        files: ["<%= path.development %>**/*.{php,html}"],
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
            cwd: "<%= path.public %>/assets/js/",
            src: ["*.js", "!*.min.js"],
            dest: "<%= path.public %>/assets/js/"
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
          "<%= path.development %><%= path.js %>*.js"
        ],
        //vystupni soubor
        dest: "<%= path.public %><%= path.js %>all.js"
      }
    },

    jshint: {
      all: ["<%= path.development %><%= path.js %>**/*.js"]
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      public: {
        files: {
          "<%= path.public %><%= path.js %>all.js":
            "<%= path.public %><%= path.js %>all.js"
        }
      }
    },

    copy: {
      htaccess: {
        src: ["<%= path.public %>_htaccess"],
        dest: "<%= path.public %>.htaccess"
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
            cwd: "<%= path.public %>",
            src: ["**/*.html"],
            dest: "<%= path.public %>"
          }
        ]
      }
    },

    sync: {
      public: {
        files: [
          {
            cwd: "<%= path.development %>",
            src: ["**", "!**/*.php", "!page-components", "!page_components", "!assets/images/sprites/**", "forms/*.php"],
            dest: "<%= path.public %>"
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
      public: ["<%= path.public %>data.zip"],
      publicFiles: {
        files: [
          {
            expand: true,
            cwd: "<%= path.public %>",
            src: ["assets/sass", "assets/images/sprites", "assets/js/not-used-scripts", "assets/js/*.map", "assets/icons"], // Dictionary of files
            dest: "<%= path.public %>"
          }
        ]
      },
      gruntIconLoader: ["<%= path.icons %>grunticon.loader.js"],
      htaccess: ["<%= path.public %>_htaccess"]
    },

    compress: {
      public: {
        options: {
          archive: "<%= path.public %>data.zip"
        },
        files: [{ expand: true, cwd: "<%= path.public %>", src: ["**"], dest: "project" }]
      }
    },

    postcss: {
      public: {
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
        src: "<%= path.public %>assets/css/global.css",
        dest: "<%= path.public %>assets/css/global.css"
      },
      dev: {
        options: {
          map: true,
          processors: [require("postcss-object-fit-images")]
        },
        src: "<%= path.public %><%= path.css %>global.css",
        dest: "<%= path.public %><%= path.css %>global.css"
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            "<%= path.public %><%= path.css %>*.css",
            "<%= path.public %><%= path.js %>*.js",
            "<%= path.public %>**/*.html"
          ]
        },
        options: {
          open: true,
          watchTask: true,
          startPath: "rozcestnik.html",
          scrollProportionally: false,
          server: {
            baseDir: "<%= path.public %>"
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
            cwd: "<%= path.development %><%= path.images %>", // Src matches are relative to this path
            src: ["**/*.{png,jpg}"], // Actual patterns to match
            dest: "<%= path.public %><%= path.images %>" // Destination path prefix
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
            cwd: "<%= path.development %><%= path.images %>",
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: "<%= path.public %><%= path.images %>"
          }
        ]
      },
      no_jpg_png: {
        files: [
          {
            expand: true,
            cwd: "<%= path.development %><%= path.images %>",
            src: ["**/*.{gif,svg}"],
            dest: "<%= path.public %><%= path.images %>"
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
        //srcDir: "<%= path.development %>"
      },
      all_from_dir: {
        cwd: "<%= path.development %>",
        src: ["*.html"],
        dest: "<%= path.public %>",
        expand: true,
        ext: ".html"
      }
    }
  });

  /*
  tasks
  */

  grunt.registerTask("oimages", () =>
    tinyPngKey ? grunt.task.run("tinypng", "imagemin:no_jpg_png") : grunt.task.run("imagemin:all")
  );

  grunt.registerTask("update", ["javascript", "sass:dev", "preprocess", "postcss:dev"]);

  grunt.registerTask("javascript", ["jshint", "concat", "babel"]);

  grunt.registerTask("send", ["build", "compress"]);

  grunt.registerTask("build", [
    //pouzijte tuto funkci pro vygenerovani public souboru
    "update",
    "clean:public",
    "sync:public",
    "copy:htaccess",
    "clean:htaccess",
    "preprocess",
    "copy:phpAnchorLinksToHTML",
    "clean:publicFiles",
    "postcss:public",
    "uglify",
    "oimages"
  ]);

  grunt.registerTask("default", ["update", "browserSync", "watch"]);
};
