module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            //coloco essa linha abaixo para sempre carregar o React automaticamente 
            runtime: 'automatic'
        }]
    ]
}