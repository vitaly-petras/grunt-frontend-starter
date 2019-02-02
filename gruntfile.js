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

    //hlidani souboru
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

    sass: {
      dev: {
        options: {
          style: "expanded",
          sourcemap: true
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
          "<%= path.public %><%= path.js %>all.js":
            "<%= path.public %><%= path.js %>all.js"
        }
      }
    },

    // vlozime htaccess do public slouzky pro kešování
    copy: {
      htaccess: {
        src: ["<%= path.public %>_htaccess"],
        dest: "<%= path.public %>.htaccess"
      },
    },

    // sznchronizuj slozky
    sync: {
      public: {
        files: [
          {
            cwd: "<%= path.development %>",
            src: ["**", "!page-components", "!page_components"],
            dest: "<%= path.public %>"
          }
        ],
        verbose: false,
        pretend: false,
        failOnError: false,
        ignoreInDest: ["data.zip", "page-components", "page_components", ".htaccess"],
        updateAndDelete: true,
        compareUsing: "mtime"
      }
    },

    // mazani souboru
    clean: {
      public: ["<%= path.public %>data.zip"],
      publicFiles: {
        files: [
          {
            expand: true,
            cwd: "<%= path.public %>",
            src: ["<%= path.scss %>", "assets/js/*.map"],
            dest: "<%= path.public %>"
          }
        ]
      },
      htaccess: ["<%= path.public %>_htaccess"]
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
        src: "<%= path.public %><%= path.css %>global.css",
        dest: "<%= path.public %><%= path.css %>global.css"
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
            cwd: "<%= path.development %><%= path.images %>", // Src matches are relative to this path
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
    "update",
    "clean:public",
    "sync:public",
    "copy:htaccess",
    "clean:htaccess",
    "preprocess",
    "clean:publicFiles",
    "postcss:public",
    "uglify",
    "oimages"
  ]);

  grunt.registerTask("default", ["update", "browserSync", "watch"]);
};
