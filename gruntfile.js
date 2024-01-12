"use strict";

module.exports = function(grunt) {
  const rootDestinations = {
    development: "dev/", //pouze pro vyvoj
    public: "dist/" //produkce
  };

  const mainDestinations = {
    pages: "app/", //pro html a php soubory
    images: "images/", //obrazky (vkladane pres admin)
    assets: "assets/" //doplnujici soubory, ke kterym uzivatel nema pristup (css, js, icons)
  };

  const secondaryDestinations = {
    //tyto soubory doporucuji nechat jak jsou a menit rootDestinations nebo mainDestinations v pripade potreby
    scss: `${mainDestinations.assets}pcss/`,
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
        files: `${path.development}${path.scss}**/*.pcss`,
        tasks: ["update_css"]
      },
      js: {
        files: [`${path.development}${path.js}**/*.js`],
        tasks: ["update_javascript"]
      },
      pages: {
        files: [`${path.development}${path.pages}**`, `!${path.development}${path.pages}components/**`],
        tasks: ["update_newer_pages"]
      },
      page_partials: {
        files: [`${path.development}${path.pages}**/_*.twig`, `${path.development}${path.pages}twig-all-data.json`],
        tasks: ["update_all_pages"]
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
        },
        tasks: ["update_all"]
      },
      tailwindConfig: {
        files: ["tailwind.config.js"],
        tasks: ["update_css"]
      }
    },

    // minifikace javascriptu
    uglify: {
      target: {
        options: {
          sourceMap: true
        },
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

    browserify: {
      dist: {
        files: [
          {
            expand: true,
            cwd: `${path.development}${path.js}`,
            src: ["*.js"],
            dest: `${path.public}${path.js}`,
            ext: ".js"
          }
        ],
        options: {
          transform: [['babelify', { presets: ["@babel/preset-env"] }]],
          plugin: ['esmify'],
          browserifyOptions: {
            debug: grunt.cli.tasks[0] !== `build`
          }
        }
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
            src: [`**`, '!**/*.{php,twig}'],
            dest: `${path.public}`
          }
        ],
      }
    },

    // mazani souboru
    clean: {
      all_public_files_but_not_images: [`${path.public}**/*`, `!${path.public}${path.images}**`],
      pages: [`${path.public}*.{html,php}`],
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
      options: {
        map: {
          inline: false,
          annotation: `${path.public}${path.css}`
        },
      },
      update: {
        options: {
          processors: [
            require("postcss-import")(),
            require('tailwindcss/nesting')(),
            require("tailwindcss")(),
            require("autoprefixer")(),
            require(`postcss-pxtorem`)({
              rootValue: 16,
              unitPrecision: 5,
              propList: ["*"],
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 2
            }),
            require("postcss-flexbugs-fixes")(),
            require('postcss-inset')()
          ],
        },
        files: [{
          expand: true,
          cwd: `${path.development}${path.scss}`,
          src: ["*.pcss", "!_*"],
          dest: `${path.public}${path.css}`,
          ext: ".css"
        }]
      },
      minify: {
        options: {
          processors: [
            require("cssnano")({
              preset: [
                "default",
                {
                  normalizePositions: false
                }
              ]
            })
          ]
        },
        files: [{
          expand: true,
          cwd: `${path.public}${path.css}`,
          src: ["*.css"],
          dest: `${path.public}${path.css}`
        }]
      }
    },

    browserSync: {
      target: {
        bsFiles: {
          src: [
            `${path.public}${path.css}*.css`,
            `${path.public}${path.js}*.js`,
            `${path.public}**/*.{html,php,twig}`,
            `${path.public}${path.icons}**/*`
          ]
        },
        options: {
          open: true,
          watchTask: true,
          startPath: "start.html",
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
          //if netlify build errors with timeout, comment zopfli plugin
          require("imagemin-zopfli")({
            more: true
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
      webpimages: {
        options: {
          use: [
            //webp
            require("imagemin-webp")({
              quality: 90
            })
          ]
        },
        files: [
          {
            expand: true,
            cwd: `${path.public}${path.images}`,
            src: ["**/*.{webp}"],
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

    // https://www.npmjs.com/package/grunt-twig-render
    twigRender: {
      options: {
        functions: {
          html_class: function(classes) {
            let resultArrayOfClasses = [];

            function processString(string) {
              resultArrayOfClasses.push(...string.split(" "));
            }
          
            function processArray(array) {
              array.map(item => processAll(item));
            }
          
            function processObject(object) {
              Object.keys(object).map(key => {
                if (!!object[key]) processAll(key);
              });
            }
          
            function processAll(instance) {
              if (typeof instance === "string") processString(instance);
              else if (Array.isArray(instance)) processArray(instance);
              else if (typeof instance === "object") processObject(instance);
            }
          
            processAll(classes);
          
            return resultArrayOfClasses.join(" ");
          }
        }
      },
      pages: {
        data: [
          {
            task: grunt.cli.tasks[0],
            version: Date.now(),
          },
          `${path.development}${path.pages}twig-all-data.json`
        ],
        expand: true,
        cwd: `${path.development}${path.pages}`,
        src: ['**/*.{twig,html,php}', 'style.css', '!**/_*.{twig,html}'],
        dest: `${path.public}`,
        // ext: '.html',
        rename: function (dest, src) {
          return dest + src.replace('.twig', '.html');
        }
      },
    },
  });

  /*
  tasks
  */

  //update tasks
  grunt.registerTask("update_all", [
    "clean:all_public_files_but_not_images",
    "update_assets",
    "update_javascript",
    "update_icons",
    "update_css",
    "update_images",
    "update_all_pages"
  ]);
  grunt.registerTask("update_javascript", ["browserify"]);
  grunt.registerTask("update_newer_pages", ["sync:pages", "newer:twigRender", "update_css"]);
  grunt.registerTask("update_all_pages", ["clean:pages", "sync:pages", "twigRender", "update_css"]);
  grunt.registerTask("update_css", ["postcss:update"]);
  grunt.registerTask("update_images", ["sync:images"]);
  grunt.registerTask("update_icons", ["newer:imagemin:icons", "sync:icons", "newer:svgstore"]);
  grunt.registerTask("update_assets", ["sync:assets"]);

  //optimize tasks
  grunt.registerTask("optimize_all", [
    "optimize_css",
    "optimize_javascript",
    //"optimize_pages",
    "optimize_images"
  ]);
  grunt.registerTask("optimize_javascript", ["newer:uglify"]);
  grunt.registerTask("optimize_css", ["postcss:minify"]);
  grunt.registerTask("optimize_pages", ["clean:pages"]);
  grunt.registerTask("optimize_images", ["newer:imagemin:images", "newer:imagemin:webpimages"]);

  //3 main tasks
  grunt.registerTask("build", ["update_all", "optimize_all", "compress"]);
  grunt.registerTask("develop", ["update_all", "browserSync", "watch"]);

  grunt.registerTask("default", function () {
    grunt.log.writeln("\nVyberte prosím z dostupných příkazů:"["black"].bold);
    grunt.log.writeln(` - grunt develop\n - grunt build`);
  });
};
