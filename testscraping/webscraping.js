var http=require('http')
var cheerio=require('cheerio')
http.get("http://news.ycombinator.com",function(res){

                       if (res.statusCode==200)
                       {
                              res.on('data',function(d) {

                                                           var document =cheerio.load(d.toString());
                                                           console.log("Hola ya llegue")
                                                           console.log(d.toString())
                                                           document("span.comhead").each(function(i,element)
                                                                            {
                                                                                  console.log(element);

                                                                            }
                                                            );
                                                        }
                                     )


                       }else console.log("Error")

});