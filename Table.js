class Table {
    constructor(dataTable){
        this.dataTable = dataTable;
    }

    createHeader(){
        let tag = 
        `
        <thead class>
            <tr class="table table-dark">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Company</th>
            </tr>
        </thead>
        `

        return tag;
    }

    createBody(data){
        let openTag = ` <tbody>`
        data.forEach((body) => {
            openTag += `
            <tr >
                <td>${body.id}</td>
                <td>${body.name}</td>
                <td>${body.username}</td>
                <td>${body.email}</td>
                <td>${body.address.street}, ${body.address.city}</td>
                <td>${body.company.name}</td>
            </tr>
            `
        });
        let closeTag = ` </tbody>`

        return openTag + closeTag;
    }

    render(element){
        let table = 
        `
        <table class="table table-striped">
        ${this.createHeader()}
        ${this.createBody(this.dataTable)}
        </table>
        `
        element.innerHTML = table;
    }
}

export default Table;