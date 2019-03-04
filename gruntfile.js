"use strict";

module.exports = function(grunt) {
  const rootDestinations = {
    development: "dev/", //pouze pro vyvoj
    public: "public/" //produkce
  };

  const mainDestinations = {
    pages: "pages/", //pro html a php soubory
    images: "images/", //obrazky (vkladane pres admin)
    assets: "assets/" //doplnujici soubory, ke kterym uzivatel nema pristup (css, js, icons)
  };

  const secondaryDestinations = {
    //tyto soubory doporucuji nechat jak jsou a menit rootDestinations nebo mainDestinations v pripade potreby
    scss: `${mainDestinations.assets}sass/`,
    css: `${mainDestinations.assets}css/`,
    js: `${mainDestinations.assets}js/`,
    icons: `${mainDestinations.assets}icons/`
  };

  const path = {
    ...rootDestinations,
    ...mainDestinations,
    ...secondaryDestinations
  };

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    //hlidani souboru
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      css: {
        files: `${path.development}${path.scss}**/*.scss`,
        tasks: grunt.cli.tasks[0] === "develop" ? ["update_css"] : ["update_css", "optimize_css"]
      },
      js: {
        files: [`${path.development}${path.js}*.js`],
        tasks: grunt.cli.tasks[0] === "develop" ? ["update_javascript"] : ["update_javascript", "optimize_javascript"]
      },
      pages: {
        files: [`${path.development}${path.pages}**/*.{php,html}`],
        tasks: ["update_pages"]
      },
      images: {
        files: [`${path.development}${path.images}**/*`],
        tasks: grunt.cli.tasks[0] === `develop` ? [`update_images`] : [`update_images`, `optimize_images`]
      },
      icons: {
        files: [`${path.development}${path.icons}**/*`],
        tasks: ["update_icons"]
      },
      assets: {
        files: [
          `${path.development}${path.assets}**/*`,
          `!${path.development}${path.scss}**`,
          `!${path.development}${path.js}**`,
          `!${path.development}${path.icons}**`,
          `!${path.development}${path.assets}**/*.md`
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
            cwd: `${path.development}${path.scss}`,
            src: ["*.scss", "!_*"],
            dest: `${path.public}${path.css}`,
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
            cwd: `${path.public}${path.js}`,
            src: ["**/*.js", "!*.min.js"],
            dest: `${path.public}${path.js}`
          }
        ]
      }
    },

    // sjednoceni vsech .js souboru do jednoho
    concat: {
      target: {
        src: [
          //vstupni soubory
          `node_modules/object-fit-images/dist/ofi.js`,
          `${path.development}${path.js}**/*.js`
        ],
        //vystupni soubor
        dest: `${path.public}${path.js}custom.js`
      }
    },

    // validace js
    jshint: {
      all: {
        src: `${path.development}${path.js}**/*.js`
      }
    },

    // synchronizuj slozky
    sync: {
      assets: {
        files: [
          {
            cwd: `${path.development}${path.assets}`,
            src: [
              `**`,
              `!${path.css.split("/")[path.css.split("/").length - 2]}/**`,
              `!${path.icons.split("/")[path.icons.split("/").length - 2]}/**`,
              `!${path.scss.split("/")[path.scss.split("/").length - 2]}/**`,
              `!${path.js.split("/")[path.js.split("/").length - 2]}/**`,
              `!**/*.md`
            ],
            dest: `${path.public}${path.assets}`
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
            cwd: `${path.development}${path.images}`,
            src: ["**"],
            dest: `${path.public}${path.images}`
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
            cwd: `${path.development}${path.icons}`,
            src: ["**"],
            dest: `${path.public}${path.icons}`
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
            cwd: `${path.development}${path.pages}`,
            src: [`**/*.{php,html}`, `!checklist.html`],
            dest: `${path.public}${path.pages}`
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
      public: [`${path.public}`],
      pages: [`${path.public}${path.pages}`],
      icons: [`${path.public}${path.icons}`]
    },

    // komprese
    compress: {
      public: {
        options: {
          archive: `${path.public}data.zip`
        },
        files: [{ expand: true, cwd: `${path.public}`, src: ["**"], dest: "project" }]
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
        files: [
          {
            expand: true,
            cwd: `${path.public}${path.css}`,
            src: ["*.css"],
            dest: `${path.public}${path.css}`
          }
        ]
      }
    },

    browserSync: {
      target: {
        bsFiles: {
          src: [
            `${path.public}${path.css}*.css`,
            `${path.public}${path.js}*.js`,
            `${path.public}${path.pages}**/*.{html,php}`,
            `${path.public}${path.icons}**/*`
          ]
        },
        options: {
          open: true,
          watchTask: true,
          startPath: "rozcestnik.html",
          scrollProportionally: false,
          server: {
            baseDir: `${path.public}`
          }
        }
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
      images: {
        files: [
          {
            expand: true,
            cwd: `${path.public}${path.images}`,
            src: ["**/*.{png,jpg,gif,svg}"],
            dest: `${path.public}${path.images}`
          }
        ]
      },
      icons: {
        options: {
          use: [
            require("imagemin-svgo")({
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeUselessStrokeAndFill: {
                    removeNone: true
                  }
                },
                {
                  removeAttrs: {
                    attrs: "(stroke.*|fill.*)" //remove all stroke and fill related attributes
                  }
                }
              ]
            })
          ]
        },
        files: [
          {
            expand: true,
            cwd: `${path.development}${path.icons}`,
            src: ["**/*.svg"],
            dest: `${path.public}${path.icons}`
          }
        ]
      }
    },

    //svg icons
    svgstore: {
      options: {
        cleanup: ["fill", "stroke"],
        includedemo: true
      },
      all: {
        files: {
          [`${path.public}${path.assets}icons.svg`]: [`${path.public}${path.icons}*.svg`]
        }
      }
    },

    // šablonování html
    preprocess: {
      options: {
        srcDir: `${path.public}${path.pages}`,
        type: "html",
        context: {
          task: grunt.cli.tasks[0],
          BSversion: grunt.file.readJSON("./package.json").dependencies.bootstrap.substring(1),
          jQueryVersion: grunt.file.readJSON("./package.json").dependencies.jquery.substring(1)
        }
      },
      pages: {
        cwd: `${path.public}${path.pages}`,
        src: ["**/*.{html,php}", "!components/**"],
        dest: `${path.public}`,
        expand: true
      }
    }
  });

  /*
  tasks
  */

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
  grunt.registerTask("update_javascript", ["newer:jshint", "newer:concat"]);
  grunt.registerTask("update_pages", ["sync:pages", "newer:preprocess"]);
  grunt.registerTask("update_css", ["sass"]);
  grunt.registerTask("update_images", ["sync:images"]);
  grunt.registerTask("update_icons", ["newer:imagemin:icons", "sync:icons", "newer:svgstore"]);
  grunt.registerTask("update_assets", ["sync:assets"]);

  //optimize tasks
  grunt.registerTask("optimize_all", [
    "optimize_css",
    "optimize_javascript",
    "optimize_images",
    "optimize_pages",
    "optimize_icons"
  ]);
  grunt.registerTask("optimize_javascript", ["newer:uglify"]);
  grunt.registerTask("optimize_pages", ["clean:pages"]);
  grunt.registerTask("optimize_css", ["newer:postcss"]);
  grunt.registerTask("optimize_images", ["newer:imagemin:images"]);
  grunt.registerTask("optimize_icons", ["clean:icons"]);

  //3 main tasks
  grunt.registerTask("build", ["update_all", "optimize_all", "compress"]);
  grunt.registerTask("develop", ["update_all", "browserSync", "watch"]);
  grunt.registerTask("debug", ["update_all", "optimize_all", "browserSync", "watch"]);

  grunt.registerTask("default", function() {
    grunt.log.writeln("\nVyberte prosím z dostupných příkazů:"["black"].bold);
    grunt.log.writeln(` - grunt develop\n - grunt build\n - grunt debug`);
  });
};
