import { Component, Input } from "@angular/core";
import { Officer } from "src/app/shared/models/officer.model";

@Component({
    selector:"app-officer-create-form",
    template:` 
    <div class="row">
        <div class="col">
            <form>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" class="form-control">
                    </div>
                    <div class="col-6 form-group">
                        <label for="description">Description</label>
                        <input type="text" id="description" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-success" type="submit">ADD</button>
                        <button class="btn btn-danger" type="button">DELETE</button>
                        <button class="btn btn-primary" type="button">CLEAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>`
})

export class OfficerCreateComponentForm{
@Input('officerCreateForm') officer: Officer;

onAddOfficer(){

}

onDeleteOfficer(){

}
}