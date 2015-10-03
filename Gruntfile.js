module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        files: [
          {cwd: 'templates/', expand: true, src: '**', dest: 'test/templates'},
          {cwd: 'static/img/', expand: true, src: '**', dest: 'test/static/img'},
          {cwd: 'static/fonts/', expand: true, src: '**', dest: 'test/static/fonts'},
          {cwd: 'static/js/', expand: true, src: ['ui-bootstrap-tpls-0.13.4.min.js','main.js'], dest: 'test/static/js'},
          {cwd: '/', expand: true, src: ['/robots.txt','/sitemap.xml'], dest: 'test/'},
          {cwd: 'static/mail/', expand: true, src: '**', dest: 'test/static/mail'}
        ]
      }
    },
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
    dist: {
      options: {
          ignore: [
            ".panel.panel-default",
            ".fade",
            ".fade.in",
            ".collapse",
            ".collapse.in",
            ".collapsing",
            ".alert-danger",
            // Modal
            ".modal",
            ".modal.fade.in",
            ".modal-dialog",
            ".modal-scrollbar-measure",
            ".modal-backdrop.fade",
            ".modal-backdrop.in",
            ".modal.fade.modal-dialog",
            ".modal.in.modal-dialog",
            ".modal-open",
            ".in",
            ".modal-backdrop",
            /\.open/
          ],
          compress:true
        },
      files: [
        { src: '*.html', dest: 'test/css/main.css'}
      ]
      }
    },
    cssmin: {
      target: {
        files: {
          'test/static/css/main.min.css': ['static/css/bootstrap.css', 'static/css/font-awesome.min.css'
          ,'static/css/owl.carousel.css','static/css/masterslider.css','static/css/front.css'],
          'test/static/css/app.min.css': ['static/css/bootstrap.css', 'static/css/font-awesome.min.css'
          ,'static/css/front.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
        'test/index.html': ['index.html'],
        'test/catalogo.html': ['catalogo.html'],
        'test/contacto.html': ['contacto.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'test/static/js/app.min.js': ['static/js/bootstrap.min.js','static/js/jquery.easing.min.js'
          ,'static/js/scrolling-nav.js','static/js/owl.carousel.min.js','static/js/masterslider.min.js','static/js/app.js'],
          'test/static/js/catalogo.min.js': ['static/js/bootstrap.min.js','static/js/jquery.easing.min.js','static/js/scrolling-nav.js'],
          'test/static/js/contacto.min.js': ['static/js/bootstrap.min.js','static/js/jquery.easing.min.js','static/js/scrolling-nav.js'
          ,'static/js/mapContact.js'],
          'test/static/js/mail/mail.min.js': ['static/js/mail/jqBootstrapValidation.js','static/js/mail/contact_me.js']
        }
      }
    },
    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          'test/index.html': 'test/index.html',     // 'destination': 'source' 
          'test/catalogo.html': 'test/catalogo.html',
          'test/contacto.html': 'test/contacto.html'
        }
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Default tasks.
  grunt.registerTask('default', ['copy','cssmin','uglify','processhtml','htmlmin']);
};