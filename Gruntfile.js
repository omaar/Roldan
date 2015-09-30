module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        cwd: 'src/', expand: true, src: '**', dest: 'dist/'
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
          ]
        },
      files: [
        { src: '*.html', dest: 'dist/css/main.css'}
      ]
      },
      options: {
        compress:true
      }
    },
    processhtml: {
      dist: {
        files: {
        'dist/index.html': ['src/index.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/compiled.min.js': ['static/js/bootstrap.min.js','static/js/jquery.easing.min.js'
          ,'static/js/scrolling-nav.js','static/js/owl.carousel.min.js','static/js/app.js'] // make sure we load jQuery first
        }
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'uglify', 'uncss','processhtml']);
};