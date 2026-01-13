/**
 * PrivacyGuard DNS - Webpack Configuration
 * 
 * Modern webpack 5 configuration for building optimized production bundles
 * and development environment with hot reload support.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Environment configuration
const isProduction = process.env.NODE_ENV === 'production';

// Paths configuration
const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    docs: path.resolve(__dirname, 'docs'),
    public: path.resolve(__dirname, 'public')
};

// Shared configuration
const sharedConfig = {
    // Set the base path for all assets
    output: {
        path: paths.dist,
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].chunk.js',
        clean: true,
        assetModuleFilename: 'assets/[hash][ext]'
    },

    // Module resolution configuration
    resolve: {
        extensions: ['.js', '.css', '.json'],
        modules: [paths.src, 'node_modules'],
        alias: {
            '@': paths.src,
            '@components': path.resolve(paths.src, 'components'),
            '@utils': path.resolve(paths.src, 'utils'),
            '@styles': path.resolve(paths.src, 'styles'),
            '@assets': path.resolve(paths.src, 'assets')
        }
    },

    // Module rules
    module: {
        rules: [
            // JavaScript/TypeScript rules
            {
                test: /\.js$|\.mjs$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                    targets: '> 0.25%, not dead'
                                }
                            ]
                        ]
                    }
                }
            },

            // CSS rules
            {
                test: /\.css$/,
                use: [
                    isProduction
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: !isProduction
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: !isProduction,
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env'
                                ]
                            }
                        }
                    }
                ]
            },

            // Asset rules (images, fonts, etc.)
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            }
        ]
    },

    // Plugin configuration
    plugins: [
        // Generate index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            inject: 'body',
            minify: isProduction ? {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            } : false
        }),

        // Extract CSS to separate file
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css'
        }),

        // Copy static assets
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.docs,
                    to: 'docs'
                },
                {
                    from: path.resolve(__dirname, 'README.md'),
                    to: '.'
                },
                {
                    from: path.resolve(__dirname, 'README.ar.md'),
                    to: '.'
                },
                {
                    from: path.resolve(__dirname, 'LICENSE'),
                    to: '.'
                }
            ]
        })
    ],

    // Optimization configuration
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: isProduction,
                        drop_debugger: isProduction,
                        pure_funcs: ['console.log', 'console.info']
                    },
                    output: {
                        comments: false
                    }
                },
                extractComments: false,
                parallel: true
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true }
                        }
                    ]
                }
            })
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10
                },
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        runtimeChunk: 'single',
        moduleIds: isProduction ? 'deterministic' : 'named'
    },

    // Performance configuration
    performance: {
        hints: isProduction ? 'warning' : false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    // Devtool configuration
    devtool: isProduction
        ? 'source-map'
        : 'eval-cheap-module-source-map',

    // Stats configuration
    stats: {
        modules: false,
        children: false,
        chunks: false,
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: false,
        timings: true,
        warnings: true
    }
};

// Development configuration
const developmentConfig = {
    devServer: {
        static: {
            directory: paths.dist
        },
        compress: true,
        hot: true,
        open: true,
        port: 3000,
        host: 'localhost',
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        },
        historyApiFallback: true,
        allowedHosts: 'all'
    }
};

// Production configuration
const productionConfig = {
    // Production-specific optimizations
};

// Export configuration based on environment
module.exports = () => {
    const config = isProduction
        ? { ...sharedConfig, ...productionConfig }
        : { ...sharedConfig, ...developmentConfig };

    return config;
};
