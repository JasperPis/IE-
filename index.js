const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/home'))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect()
        let c1s="0";
        let c2s="0";
        let c3s="0";
        let c4s="0";
        let c5s="0";
        let d1s="0";
        let d2s="0";
        let d3s="0";
        let d4s="0";
        let e1s="0";
        let e2s="0";
        
      let c1 = req.query.c1;
        if(c1.length%2 == 1){c1='Shrub';c1s="selected";};
      let c2 = req.query.c2;
        if(c2.length%2 == 0){c2='Herb';c2s="selected";};
      let c3 = req.query.c3;
        if(c3.length%2 == 0){c3='Grass';c3s="selected";};
      let c4 = req.query.c4;
        if(c4.length%2 == 0){c4='Tree';c4s="selected";};
      let c5 = req.query.c5;
        if(c5.length%2 == 0){c5='Aquatic';c5s="selected";};
        
      let d1 = req.query.d1;
        if(d1.length%2 == 1){d1='Basal';d1s="selected";};
      let d2 = req.query.d2;
        if(d2.length%2 == 0){d2='Whorled';d2s="selected";};
      let d3 = req.query.d3;
        if(d3.length%2 == 0){d3='Alternate';d3s="selected";};
      let d4 = req.query.d4;
        if(d4.length%2 == 0){d4='Opposite';d4s="selected";};
        
      let e1 = req.query.e1;
        if(e1.length%2 == 1){e1='Compound';e1s="selected";};
      let e2 = req.query.e2;
        if(e2.length%2 == 0){e2='Simple';e2s="selected";};
        
      let result = await client.query("SELECT * FROM weeds Where Growth_Form in ('"+c1+"','"+c2+"','"+c3+"','"+c4+"','"+c5+"') and Leaf_Arrangement in ('"+d1+"','"+d2+"','"+d3+"','"+d4+"') and Leaf_Form in ('"+e1+"','"+e2+"')");
      let results = (result) ? result.rows : null;
      var num = results.length;
      res.render('pages/db',{results:results,c1s:c1s,c2s:c2s,c3s:c3s,c4s:c4s,c5s:c5s,d1s:d1s,d2s:d2s,d3s:d3s,d4s:d4s,e1s:e1s,e2s:e2s,num:num});
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/db2', async (req, res) => {
    try {
      const client = await pool.connect()
        let c1s="0";
        let c2s="0";
        let c3s="0";
        let c4s="0";
        let c5s="0";
        let d1s="0";
        let d2s="0";
        let d3s="0";
        let d4s="0";
        let e1s="0";
        let e2s="0";
      let c1 = req.query.c1;
        if(typeof(c1)==typeof("ss")){
            if(c1=="Shrub"){
                c1s="selected"
            }
            if(c1=="Herb"){
                c2s="selected"
            }
            if(c1=="Grass"){
                c3s="selected"
            }
            if(c1=="Tree"){
                c4s="selected"
            }
            if(c1=="Aquatic"){
                c5s="selected"
            }
        }
        else{c1="1"}
        
      let c2 = req.query.c2;
        if(typeof(c2)==typeof("ss")){
            if(c2=="Shrub"){
                c1s="selected"
            }
            if(c2=="Herb"){
                c2s="selected"
            }
            if(c2=="Grass"){
                c3s="selected"
            }
            if(c2=="Tree"){
                c4s="selected"
            }
            if(c2=="Aquatic"){
                c5s="selected"
            }
        }
        else{c2="1"}
        
      let c3 = req.query.c3;
        if(typeof(c3)==typeof("ss")){
            if(c3=="Shrub"){
                c1s="selected"
            }
            if(c3=="Herb"){
                c2s="selected"
            }
            if(c3=="Grass"){
                c3s="selected"
            }
            if(c3=="Tree"){
                c4s="selected"
            }
            if(c3=="Aquatic"){
                c5s="selected"
            }
        }
        else{c3="1"}
        
      let c4 = req.query.c4;
        if(typeof(c4)==typeof("ss")){
            if(c4=="Shrub"){
                c1s="selected"
            }
            if(c4=="Herb"){
                c2s="selected"
            }
            if(c4=="Grass"){
                c3s="selected"
            }
            if(c4=="Tree"){
                c4s="selected"
            }
            if(c4=="Aquatic"){
                c5s="selected"
            }
        }
        else{c4="1"}
        
      let c5 = req.query.c5;
        if(typeof(c5)==typeof("ss")){
            if(c5s=="Shrub"){
                c1s="selected"
            }
            if(c5=="Herb"){
                c2s="selected"
            }
            if(c5=="Grass"){
                c3s="selected"
            }
            if(c5=="Tree"){
                c4s="selected"
            }
            if(c5=="Aquatic"){
                c5s="selected"
            }
        }
        else{c5="1"}
        
      let d1 = req.query.d1;
        if(typeof(d1)==typeof("ss")){
            if(d1=="Basal"){
                d1s="selected"
            }
            if(d1=="Whorled"){
                d2s="selected"
            }
            if(d1=="Alternate"){
                d3s="selected"
            }
            if(d1=="Opposite"){
                d4s="selected"
            }
        }
        else{d1="1"}
        
      let d2 = req.query.d2;
        if(typeof(d2)==typeof("ss")){
            if(d2=="Basal"){
                d1s="selected"
            }
            if(d2=="Whorled"){
                d2s="selected"
            }
            if(d2=="Alternate"){
                d3s="selected"
            }
            if(d2=="Opposite"){
                d4s="selected"
            }
        }
        else{d2="1"}
        
      let d3 = req.query.d3;
        if(typeof(d3)==typeof("ss")){
            if(d3=="Basal"){
                d1s="selected"
            }
            if(d3=="Whorled"){
                d2s="selected"
            }
            if(d3=="Alternate"){
                d3s="selected"
            }
            if(d3=="Opposite"){
                d4s="selected"
            }
        }
        else{d3="1"}
        
      let d4 = req.query.d4;
        if(typeof(d4)==typeof("ss")){
            if(d4=="Basal"){
                d1s="selected"
            }
            if(d4=="Whorled"){
                d2s="selected"
            }
            if(d4=="Alternate"){
                d3s="selected"
            }
            if(d4=="Opposite"){
                d4s="selected"
            }
        }
        else{d4="1"}
        
      let e1 = req.query.e1;
        if(typeof(e1)==typeof("ss")){
            if(e1=="Compound"){
                e1s="selected"
            }
            if(e1=="Simple"){
                e2s="selected"
            }
        }
        else{e1="a"}
        
      let e2 = req.query.e2;
        if(typeof(e2)==typeof("ss")){
            if(e2=="Compound"){
                e1s="selected"
            }
            if(e2=="Simple"){
                e2s="selected"
            }
        }
        else{e2="a"}
        
     if(c1s=="0" && c2s=="0" && c3s=="0" && c4s=="0" && c5s=="0"){
         c1="Shrub";
         c2="Herb";
         c3="Grass";
         c4="Tree";
         c5="Aquatic";
     }
     if(d1s=="0" && d2s=="0" && d3s=="0" && d4s=="0"){
         d1="Basal";
         d2="Whorled";
         d3="Alternate";
         d4="Opposite";
     }
     if(e1s=="0" && e2s=="0"){
         e1="Compound";
         e2="Simple";
     }
        
      var result = await client.query("SELECT * FROM weeds Where Growth_Form in ('"+c1+"','"+c2+"','"+c3+"','"+c4+"','"+c5+"') and Leaf_Arrangement in ('"+d1+"','"+d2+"','"+d3+"','"+d4+"') and Leaf_Form in ('"+e1+"','"+e2+"')");
      var results = (result) ? result.rows : null;
      var num = results.length;
      res.render('pages/db',{results:results,c1s:c1s,c2s:c2s,c3s:c3s,c4s:c4s,c5s:c5s,d1s:d1s,d2s:d2s,d3s:d3s,d4s:d4s,e1s:e1s,e2s:e2s,num:num});
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
