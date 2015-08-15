/**
 * Created by gthardy on 8/15/15.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchtedExtensions:['js']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['nodemon']);
};