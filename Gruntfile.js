module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'min-assets',
                    src: ['*.svg'],
                    dest: 'images'
                }],
                options: {
                }
            }
        },
        watch: {
            svgcompactor: {
                files: 'min-assets/*.svg',
                tasks: ['grunticon:myIcons']
            }
        }

    }); // end of configuring the grunt task
    
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-contrib-watch');

    
    var tasks = [
        'grunticon',
        'watch'
    ];

    grunt.registerTask('default', tasks);
    grunt.registerTask('prebuild', ['grunticon']);
};