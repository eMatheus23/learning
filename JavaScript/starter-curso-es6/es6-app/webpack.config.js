module.exports = {
    // entry é o arquivo principal
    entry: './main.js',
    // output é o arquivo destino, como o bundle do babel
    output: {
        // caminho do arquivo. __dirname se refere a mesma pasta do webpack.config.js
        path: __dirname,
        // nome do arquivo
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // "/ /" -> diz ao programa que se trata de uma expressão regular
                // "\.js$" -> busca todos os arquivos terminados em .js
                test: /\.js$/,
                // para que o babel não execute os JS dentro da node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
}