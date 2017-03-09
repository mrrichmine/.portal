import { Component, Input }         from '@angular/core/src/metadata/directives';

import { BranchesComponent }        from "../branches.component";

import { BranchesService }          from "../branches.service";
import { CartridgeStoreService }    from "../../cartridge-store/cartridge-store.service";

import { Branch }                   from '../branches.model';

@Component({
    selector:    'branches__item',
    templateUrl: 'branches__item.component.html'
})
export class BranchesItemComponent {

    @Input() branch: Branch;

    constructor(private branchesService: BranchesService,
                private cartridgestoreService: CartridgeStoreService,
                private branchesComponent: BranchesComponent) {
    }

    // Создание Хранилища Картриджей в Филиале
    branchCartridgeStore() {

        this.cartridgestoreService.add(this.branch)

            .subscribe(
                // При положительном ответе обновить список <- Филиалов ->
                result => this.branchesComponent.branchGet()
            );
    }

    // Удаление Филиала
    branchDelete() {

        this.branchesService.erase(this.branch)
            .subscribe(
                // При положительном ответе обновить список <- Филиалов ->
                result => this.branchesComponent.branchGet()
            );
    }

    // Хранилище Картриджей еще не существует
    haveCartridgeStore() {
        return this.branch.cartridge_store !== null;
    };

}
