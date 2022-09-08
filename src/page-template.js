const generateManager = managerData => {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-info text-white">
                <h3>${managerData.name}</h3>
                <h4><i class="bi bi-person-circle"></i> ${managerData.role}</h4>
            </div>

            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${managerData.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
                    <li class="list-group-item">Office Number: ${managerData.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateEngineer = engineerData => {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-info text-white">
                <h3>${engineerData.name}</h3>
                <h4><i class="bi bi-file-earmark-code"></i> ${engineerData.role}</h4>
            </div>

            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineerData.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineerData.github}">${engineerData.github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateIntern = internData => {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header bg-info text-white">
                <h3>${internData.name}</h3>
                <h4><i class="bi bi-mortarboard"></i> ${internData.role}</h4>
            </div>

            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${internData.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${internData.email}">${internData.email}</a></li>
                    <li class="list-group-item">School: ${internData.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateData = data => {
    array=[];

    for(let i = 0; i < data.length; i++){
        if(data[i].getRole() === 'Manager'){
            const manager = generateManager(data[i]);
            array.push(manager);
        }
        if(data[i].getRole() === 'Engineer'){
            const engineer = generateEngineer(data[i]);
            array.push(engineer);
        }
        if(data[i].getRole() === 'Intern'){
            const intern = generateIntern(data[i]);
            array.push(intern);
        }
    }

    const combinedData = array.join('')

    const generatePage = templateData(combinedData)
    return generatePage;
}

const templateData = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1 class="col-12 text-white bg-info text-center p-4">My Team</h1>
    </header>

    <main>
        <section class="container">
            <div class="row justify-content-center">

               ${data}
                
            </div>
        </section>
    </main>


   
</body>
</html>`
}

module.exports = generateData