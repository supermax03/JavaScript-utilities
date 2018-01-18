var request = require('request');
var cheerio = require('cheerio');
var util=require('util')


var getIMDBData=function(show)
{

       _url_=util.format('http://www.imdb.com/search/title?title=%s',show)
       request(_url_, function (error, response, html) {

                                    if (!error && response.statusCode == 200) {
                                        var $ = cheerio.load(html);
                                        $('div.lister-item-content').each(function(i, element){
                                              var title = $(this).children().first().first().find('a').text()
                                              var rating=$(this).find('div.ratings-bar').first().find('strong').text()
                                              var runtime=$(this).children().find('span.runtime').text()
                                              var genre=$(this).children().find('span.genre').text()
                                              var votes=$(this).find('p.sort-num_votes-visible').children().next().text()
                                              var metadata={
                                                              title:title,
                                                              runtime:runtime,
                                                              genre:genre,
                                                              rating:rating,
                                                              votes:votes
                                                             };
                                                                   console.log(metadata)

                                                          });

                                                        }

                                                   });
}

getIMDBData('Star Wars')