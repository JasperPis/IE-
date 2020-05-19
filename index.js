const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//const bodyParser = require('body-parser');

express()
  .use(express.static(path.join(__dirname, 'public')))
//  .use(bodyParser.urlencoded({ extended: false }))
  //.use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
      let c1 = req.query.c1;
        if(c1.length%2 == 1){c1='Shrub';};
      let c2 = req.query.c2;
        if(c2.length%2 == 0){c2='Succulent';};
      let c3 = req.query.c3;
        if(c3.length%2 == 0){c3='Grass';};
      let c4 = req.query.c4;
        if(c4.length%2 == 0){c4='Tree';};
        
      let d1 = req.query.d1;
        if(d1.length%2 == 1){d1='Basal';};
      let d2 = req.query.d2;
        if(d2.length%2 == 0){d2='Whorled';};
      let d3 = req.query.d3;
        if(d3.length%2 == 0){d3='Alternate';};
      let d4 = req.query.d4;
        if(d4.length%2 == 0){d4='Opposite';};
        
      let e1 = req.query.e1;
        if(e1.length%2 == 1){e1='Compound';};
      let e2 = req.query.e2;
        if(e2.length%2 == 0){e2='Fern-like';};
      let e3 = req.query.e3;
        if(e3.length%2 == 0){e3='Needle';};
      let e4 = req.query.e4;
        if(e4.length%2 == 0){e4='Simple';};
        
      const result = await client.query("SELECT * FROM weeds Where Growth_Form in ('"+c1+"','"+c2+"','"+c3+"','"+c4+"') or Leaf_Arrangement in ('"+d1+"','"+d2+"','"+d3+"','"+d4+"') or Leaf_Form in ('"+e1+"','"+e2+"','"+e3+"','"+e4+"')");
      //const result = await client.query("SELECT * FROM test_table Where id='"+num+"'");
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/db2', async (req, res) => {
    try {
      const client = await pool.connect()
      let c1 = req.query.c1;
        if(typeof(c1) == typeof(a)){c1=1;}
           // else{if(c1 == ){c1='Shrub';}
             //    if(c1 == '2'){c1='Succulent';}}
      let c2 = req.query.c2;
        if(typeof(c2) == typeof(a)){c2=1;}
           // else{c2='Succulent';}
      let c3 = req.query.c3;
        if(typeof(c3) == typeof(a)){c3=1;}
          // else{c3='Grass';}
      let c4 = req.query.c4;
        if(typeof(c4) == typeof(a)){c4=1;}
          //  else{c4='Tree';}
        
      let d1 = req.query.d1;
        if(typeof(d1) == typeof(a)){d1=1;}
          //  else{d1="Basal";}
      let d2 = req.query.d2;
        if(typeof(d2) == typeof(a)){d2=1;}
        //    else{d2="Whorled";}
      let d3 = req.query.d3;
        if(typeof(d3) == typeof(a)){d3=1;}
          //  else{d3="Alternate";}
      let d4 = req.query.d4;
        if(typeof(d4) == typeof(a)){d4=1;}
        //    else{d4="Opposite";}
        
      let e1 = req.query.e1;
        if(typeof(e1) == typeof(a)){e1=1;}
          //  else{e1="Compound";}
      let e2 = req.query.e2;
        if(typeof(e2) == typeof(a)){e2=1;}
        //    else{e2="Fern-like";}
      let e3 = req.query.e3;
        if(typeof(e3) == typeof(a)){e3=1;}
          //  else{e3="Needle";}
      let e4 = req.query.e4;
        if(typeof(e4) == typeof(a)){e4=1;}
        //    else{e4="Simple";}
      const result = await client.query("SELECT * FROM weeds Where Growth_Form in ('"+c1+"','"+c2+"','"+c3+"','"+c4+"') or Leaf_Arrangement in ('"+d1+"','"+d2+"','"+d3+"','"+d4+"') or Leaf_Form in ('"+e1+"','"+e2+"','"+e3+"','"+e4+"')");
      //const result = await client.query("SELECT * FROM test_table Where id='"+num+"'");
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
