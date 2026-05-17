body{
  margin:0;
  font-family:Arial;
  background:linear-gradient(to bottom,#bffcff,#ffffff);
  overflow:hidden;
  text-align:center;
}

.title{
  color:#00bcd4;
  text-shadow:0 0 10px white;
}

.topbar{
  display:flex;
  justify-content:center;
  gap:30px;
  margin-bottom:10px;
}

#checkout{
  padding:10px 20px;
  border:none;
  border-radius:20px;
  background:#00e5ff;
  cursor:pointer;
  font-size:18px;
}

#machine{
  width:900px;
  height:650px;
  margin:auto;
  position:relative;
  overflow:hidden;
  border:10px solid cyan;
  border-radius:30px;
  background:
  linear-gradient(to bottom,
  rgba(255,255,255,0.9),
  rgba(180,255,255,0.6));
}

#clawCable{
  width:4px;
  height:120px;
  background:black;
  position:absolute;
  left:450px;
  top:0;
  z-index:5;
}

#claw{
  width:120px;
  position:absolute;
  left:390px;
  top:90px;
  z-index:10;
  transition:
  left 0.2s ease,
  top 1s ease,
  transform 0.2s ease;
}

.neeDoh{
  width:90px;
  position:absolute;
  bottom:20px;
  user-select:none;
  transition:transform 0.2s;
}

.neeDoh:hover{
  transform:scale(1.1);
}

#prizeHole{
  width:180px;
  height:40px;
  background:black;
  position:absolute;
  bottom:0;
  right:40px;
  border-radius:50%;
}

#inventory{
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
  padding:20px;
}

.inventoryItem{
  width:100px;
  cursor:pointer;
}

#pit{
  position:absolute;
  bottom:0;
  width:100%;
  height:120px;
  background:
  linear-gradient(to top,
  rgba(0,0,0,0.2),
  transparent);
}
