// handler/root.js

module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'Hello Universe',
        greeting: `Hallo du da! Es ist ${new Date().toISOString()}`
    });
};