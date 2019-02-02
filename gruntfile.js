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
    public: "public/",
    htmlComponents: "html-components/"
  };

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    path: path,

    //hlidani souboru
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      css: {
        files: "<%= path.development %><%= path.scss %>**/*.scss",
        tasks: grunt.cli.tasks[0] === "develop" ? ["sass"] : ["sass", "postcss"]
      },
      js: {
        files: ["<%= path.development %><%= path.js %>*.js"],
        tasks: grunt.cli.tasks[0] === "develop" ? ["javascript"] : ["javascript", "uglify"]
      },
      html: {
        files: ["<%= path.development %>**/*.{php,html}"],
        tasks: ["preprocess"]
      },
      images: {
        files: ["<%= path.development %><%= path.images %>**/*"],
        tasks: grunt.cli.tasks[0] === "develop" ? ["sync:images"] : ["sync:images", "oimages"]
      },
      configFiles: {
        files: ["gruntfile.js", "package.json"],
        options: {
          reload: true
        }
      }
    },

    sass: {
      target: {
        options: {
          implementation: require("node-sass"),
          outputStyle: "expanded",
          sourcemap: true,
          sourceMapEmbed: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= path.development %><%= path.scss %>",
            src: ["*.scss", "!_*"],
            dest: "<%= path.public %><%= path.css %>",
            ext: ".css"
          }
        ]
      }
    },

    // minifikace javascriptu
    uglify: {
      target: {
        files: [
          {
            expand: true,
            cwd: "<%= path.public %><%= path.js %>",
            src: ["*.js", "!*.min.js"],
            dest: "<%= path.public %><%= path.js %>"
          }
        ]
      }
    },

    // sjednoceni vsech .js souboru do jednoho
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

    // validace js
    jshint: {
      all: ["<%= path.development %><%= path.js %>**/*.js"]
    },

    // zapis javascriptu budoucnosti a jeho automatick0 polyfilly
    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      public: {
        files: {
          "<%= path.public %><%= path.js %>all.js": "<%= path.public %><%= path.js %>all.js"
        }
      }
    },

    // vlozime htaccess do public slouzky pro kešování
    copy: {
      htaccess: {
        src: ["<%= path.development %>_htaccess"],
        dest: "<%= path.public %>.htaccess"
      }
    },

    // sznchronizuj slozky
    sync: {
      all: {
        files: [
          {
            cwd: "<%= path.development %>",
            src: [
              "**",
              "!**/*.html",
              "!<%= path.css %>**",
              "!<%= path.scss %>**",
              "!<%= path.js %>**",
              "!<%= path.htmlComponents %>**",
              "!_htaccess"
            ],
            dest: "<%= path.public %>"
          }
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
        ignoreInDest: ["**/*@*"],
        updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "mtime" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"
      },
      images: {
        files: [
          {
            cwd: "<%= path.development %><%= path.images %>",
            src: ["**"],
            dest: "<%= path.public %><%= path.images %>"
          }
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
        ignoreInDest: ["**/*@*"],
        updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "mtime" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"
      }
    },

    // mazani souboru
    clean: {
      public: ["<%= path.public %>"]
    },

    // komprese
    compress: {
      public: {
        options: {
          archive: "<%= path.public %>data.zip"
        },
        files: [{ expand: true, cwd: "<%= path.public %>", src: ["**"], dest: "project" }]
      }
    },

    postcss: {
      target: {
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
        src: "<%= path.public %><%= path.css %>global.css",
        dest: "<%= path.public %><%= path.css %>global.css"
      }
    },

    browserSync: {
      target: {
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

    // komprese obrazku
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
            cwd: "<%= path.public %><%= path.images %>", // Src matches are relative to this path
            src: ["**/*.{png,jpg}"], // Actual patterns to match
            dest: "<%= path.public %><%= path.images %>" // Destination path prefix
          }
        ]
      }
    },

    // komprese obrazku
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
            cwd: "<%= path.public %><%= path.images %>",
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: "<%= path.public %><%= path.images %>"
          }
        ]
      },
      no_jpg_png: {
        files: [
          {
            expand: true,
            cwd: "<%= path.public %><%= path.images %>",
            src: ["**/*.{gif,svg}"],
            dest: "<%= path.public %><%= path.images %>"
          }
        ]
      }
    },

    // šablonování html
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
        src: ["**/*.html", "!<%= path.htmlComponents %>**", "!checklist.html"],
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

  grunt.registerTask("update", ["clean:public", "sync:all", "javascript", "sass", "preprocess"]);

  grunt.registerTask("javascript", ["jshint", "concat", "babel"]);

  grunt.registerTask("optimize", ["postcss", "uglify", "oimages"]);

  grunt.registerTask("build", ["update", "copy:htaccess", "optimize", "compress"]);

  grunt.registerTask("develop", ["update", "browserSync", "watch"]);

  grunt.registerTask("debug", ["update", "optimize", "browserSync", "watch"]);

  grunt.registerTask("default", function() {
    grunt.log.writeln("\nVyberte prosím z dostupných příkazů:"["black"].bold);
    grunt.log.writeln(` - grunt develop\n - grunt build\n - grunt debug`);
  });
};
