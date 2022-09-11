function generateHTML(team){
    team = JSON.parse(team)
    const manager = (managerData) => {
        return `
        <div class="card">
        <div class="card-header">
            <h2></h2>  
            <h2>Manager
            ${managerData.name}</h2>
            <hr>
        </div>
        <div class="card-body">
            <ul>
                <li></li>
                <li></li>
                <li>Office Number: 12345 </li>
            </ul>
        </div>  
        `
        
    }
    const engineer = (engineerData) => {
        return `
        <div class="card">
        <div class="card-header">
            <h2>Haider Ali</h2>  
            <h2>Engineer
            ${engineerData.name}</h2>
            <hr>
        </div>
        <div class="card-body">
            <ul>
                <li></li>
                <li></li>
                <li>Office Number: 12345 </li>
            </ul>
        </div>  
        `
    }
    const intern = (internData) => {
        return `
        <div class="card">
        <div class="card-header">
            <h2>Haider Ali</h2>  
            <h2>Intern
            ${internData.name}</h2>
            <hr>
        </div>
        <div class="card-body">
            <ul>
                <li></li>
                <li></li>
                <li>Office Number: 12345 </li>
            </ul>
        </div>  
        `
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>TPG</title>
   <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
   <link href="./style.css" rel="stylesheet">
   
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">
   <div class="card">
   <div class="card-header">
       <h2></h2>  
       <h2>Manager
       ${team[0].name}</h2>
       <hr>
   </div>
   <div class="card-body">
       <ul>
           <li></li>
           <li></li>
           <li>Office Number: 12345 </li>
       </ul>
   </div>
        
</div><div class="card">
<div class="card-header">
    <h2></h2>  
    <h2> Engineer
    ${team[1].name}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: 2</li>
        <li>Email: </li>
        <li>Github Username: </li>
    </ul>
</div>
</div><div class="card">
<div class="card-header">
    <h2>Intern</h2>  
    <h2>${team[1].name}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: 3</li>
        <li>Email: </li>
        <li>School:  </li>
    </ul>
</div>
</div> 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`
}

module.exports = generateHTML