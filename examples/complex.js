var nai = require('../lib/nai'),
  Promise = require('bluebird');

nai.renderFile(__dirname + '/complex.html', {
    //debug: true,
    locals: {
      document: {

      },
      site: {
        title: 'site title'
      },
      asset_src: function(name) {
        return '//' + name;
      },
      doc_url: function(name) {
        return '//' + name;
      },
      da: {
        news: {
          latestNews: function() {
            return new Promise(function(resolve) {
              setTimeout(function() {
                resolve([{
                  title: "title1"
                }, {
                  title: "title2"
                }, {
                  title: "title3"
                }]);
              }, 100);
            });
          }
        }
      }
    }
  })
  .then(function(result) {
    console.log('==================');
    console.log(result);
  });
