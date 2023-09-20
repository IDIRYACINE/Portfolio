const { StatsWriterPlugin } = require("webpack-stats-plugin");
const Visualizer = require('webpack-visualizer-plugin2');
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        const analyzeStats = process.env.ANALYZE === 'true'

        if(analyzeStats){
            config.plugins.push( new StatsWriterPlugin({
                filename: path.join('..', 'stats', 'log.json'),
                fields: null,
                stats: { chunkModules: true },
            }),)

            config.plugins.push( new Visualizer({
                filename: path.join('..', 'stats', 'statistics.html'),
            }),)

        }

        return config
    }
}

module.exports = nextConfig
