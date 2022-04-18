let mix = require('laravel-mix')
let path = require('path')

mix
    .setPublicPath('dist')
    .alias({
        'laravel-nova': path.join(__dirname, '../../vendor/laravel/nova/resources/js/mixins/packages.js'),
        'laravel-nova-performs-searches': path.join(__dirname, '../../vendor/laravel/nova/resources/js/mixins/PerformsSearches.js'),
    })
    .vue({version: 3})
    .webpackConfig({
        externals: {
            vue: 'Vue',
        },
        output: {
            uniqueName: 'vendor/package',
        }
    })
    .js('resources/js/filter.js', 'js')
    .sass('resources/sass/filter.scss', 'css')
