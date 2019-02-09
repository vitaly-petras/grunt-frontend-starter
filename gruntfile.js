"use strict";

module.exports = function(grunt) {
  const tinyPngKey = grunt.file.exists(".tinypng-key") && grunt.file.readJSON(".tinypng-key");
  //grunt.log.write(tinyPngKey);

  const path = {
    //1. level folders
    //pr.: "dev/"
    development: "dev/",
    public: "public/",

    //2. level folders
    //pr.: "dev/images"
    pages: "pages/",
    images: "images/",
    icons: "icons/",
    assets: "assets/",

    //3. level folders
    //pr.: "dev/assets/css"
    scss: "sass/",
    css: "css/",
    js: "js/"
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
        files: "<%= path.development %><%= path.assets %><%= path.scss %>**/*.scss",
        tasks: grunt.cli.tasks[0] === "develop" ? ["update_css"] : ["update_css", "postcss"]
      },
      js: {
        files: ["<%= path.development %><%= path.assets %><%= path.js %>*.js"],
        tasks: grunt.cli.tasks[0] === "develop" ? ["update_javascript"] : ["update_javascript", "uglify"]
      },
      pages: {
        files: ["<%= path.development %><%= path.pages %>**/*.{php,html}"],
        tasks: ["update_pages"]
      },
      images: {
        files: ["<%= path.development %><%= path.images %>**/*"],
        tasks: grunt.cli.tasks[0] === "develop" ? ["update_images"] : ["update_images", "oimages"]
      },
      icons: {
        files: ["<%= path.development %><%= path.icons %>**/*"],
        tasks: ["update_icons", "update_pages"]
      },
      assets: {
        files: [
          "<%= path.development %><%= path.assets %>**/*",
          "!<%= path.development %><%= path.assets %><%= path.scss %>**",
          "!<%= path.development %><%= path.assets %><%= path.js %>**",
          "!<%= path.development %><%= path.assets %>**/*.md"
        ],
        tasks: ["update_assets"]
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
            cwd: "<%= path.development %><%= path.assets %><%= path.scss %>",
            src: ["*.scss", "!_*"],
            dest: "<%= path.public %><%= path.assets %><%= path.css %>",
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
            cwd: "<%= path.public %><%= path.assets %><%= path.js %>",
            src: ["*.js", "!*.min.js"],
            dest: "<%= path.public %><%= path.assets %><%= path.js %>"
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
          "<%= path.development %><%= path.assets %><%= path.js %>*.js"
        ],
        //vystupni soubor
        dest: "<%= path.public %><%= path.assets %><%= path.js %>all.js"
      }
    },

    // validace js
    jshint: {
      all: ["<%= path.development %><%= path.assets %><%= path.js %>**/*.js"]
    },

    // zapis javascriptu budoucnosti a jeho automatick0 polyfilly
    babel: {
      options: {
        sourceMap: true,
        presets: ["env"]
      },
      public: {
        files: {
          "<%= path.public %><%= path.assets %><%= path.js %>all.js":
            "<%= path.public %><%= path.assets %><%= path.js %>all.js"
        }
      }
    },

    // sznchronizuj slozky
    sync: {
      assets: {
        files: [
          {
            cwd: "<%= path.development %><%= path.assets %>",
            src: ["**", "!<%= path.css %>**", "!<%= path.scss %>**", "!<%= path.js %>**", "!**/*.md"],
            dest: "<%= path.public %><%= path.assets %>"
          }
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
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
        updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "mtime" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"
      },
      icons: {
        files: [
          {
            cwd: "<%= path.development %><%= path.icons %>",
            src: ["**"],
            dest: "<%= path.public %><%= path.icons %>"
          }
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
        updateAndDelete: true, // Remove all files from dest that are not found in src. Default: false
        compareUsing: "mtime" // compares via md5 hash of file contents, instead of file modification time. Default: "mtime"
      },
      pages: {
        files: [
          {
            cwd: "<%= path.development %><%= path.pages %>",
            src: ["**/*.{php,html}", "!checklist.html"],
            dest: "<%= path.public %><%= path.pages %>"
          }
        ],
        verbose: false, // Default: false
        pretend: false, // Don't do any disk operations - just write log. Default: false
        failOnError: false, // Fail the task when copying is not possible. Default: false
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
        src: "<%= path.public %><%= path.assets %><%= path.css %>global.css",
        dest: "<%= path.public %><%= path.assets %><%= path.css %>global.css"
      }
    },

    browserSync: {
      target: {
        bsFiles: {
          src: [
            "<%= path.public %><%= path.assets %><%= path.css %>*.css",
            "<%= path.public %><%= path.assets %><%= path.js %>*.js",
            "<%= path.public %><%= path.pages %>**/*.{html,php}",
            "<%= path.public %><%= path.icons %>**/*"
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
      },
      icons: {
        options: {
          use: [
            //svg
            require("imagemin-svgo")({
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  convertColors: {
                    currentColor: true
                  }
                },
                {
                  addAttributesToSVGElement: {
                    attributes: [
                      {
                        fill: "currentColor"
                      }
                    ]
                  }
                }
              ]
            })
          ]
        },
        files: [
          {
            expand: true,
            cwd: "<%= path.development %><%= path.icons %>",
            src: ["**/*.svg"],
            dest: "<%= path.public %><%= path.icons %>"
          }
        ]
      }
    },

    // šablonování html
    preprocess: {
      options: {
        srcDir: "<%= path.public %>",
        type: "html",
        context: {
          DEBUG: true
          //version: grunt.file.read("version.properties")
        }
      },
      pages: {
        cwd: "<%= path.public %><%= path.pages %>",
        src: ["**/*.{html,php}", "!components/**"],
        dest: "<%= path.public %>",
        expand: true
      }
    }
  });

  /*
  tasks
  */

  grunt.registerTask("oimages", () =>
    tinyPngKey ? grunt.task.run("tinypng", "imagemin:no_jpg_png") : grunt.task.run("imagemin:all", "imagemin:icons")
  );

  //update tasks
  grunt.registerTask("update_all", [
    "clean:public",
    "update_assets",
    "update_javascript",
    "update_icons",
    "update_css",
    "update_images",
    "update_pages"
  ]);
  grunt.registerTask("update_javascript", ["jshint", "concat", "babel"]);
  grunt.registerTask("update_pages", ["sync:pages", "preprocess"]);
  grunt.registerTask("update_css", ["sass"]);
  grunt.registerTask("update_images", ["sync:images"]);
  grunt.registerTask("update_icons", ["imagemin:icons", "sync:icons"]);
  grunt.registerTask("update_assets", ["sync:assets"]);

  grunt.registerTask("optimize", ["postcss", "uglify", "oimages"]);

  //3 main tasks
  grunt.registerTask("build", ["update_all", "optimize", "compress"]);
  grunt.registerTask("develop", ["update_all", "browserSync", "watch"]);
  grunt.registerTask("debug", ["update_all", "optimize", "browserSync", "watch"]);

  grunt.registerTask("default", function() {
    grunt.log.writeln("\nVyberte prosím z dostupných příkazů:"["black"].bold);
    grunt.log.writeln(` - grunt develop\n - grunt build\n - grunt debug`);
  });
};
