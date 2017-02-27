import { Component, Input }         from '@angular/core/src/metadata/directives';
import { OnInit }                   from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormControl }   from '@angular/forms/src/model';


import { Branch }                   from './branches.model';
import { BranchesService }          from './branches.service';

@Component({
    selector:    'branches.component',
    templateUrl: 'branches.component.html'
})
export class BranchesComponent implements OnInit {

    // Создаем переменную для данных, введенных в форму
    branchForm: FormGroup;

    // Создаем переменную для массива полученных из БД Филиалов
    branches: Branch[];

    constructor ( private branchesService: BranchesService ) {}

    // Подтверждение формы
    formSubmit(){

        // Вызываем Создание филиала
        this.branchCreate();
    }

    // Очищение формы
    formReset(){
        this.branchForm.reset()
    }

    // Создание филиала
    branchCreate(){

        // Cобираем объект Филиала по модели
        const branch = new Branch(
            this.branchForm.value.name,
            this.branchForm.value.address,
            this.branchForm.value.cartridge_store
        );

        // Подписываемся на сервис создания Филиала
        this.branchesService.create( branch )
            .subscribe(
                // Положительный ответ
                data => {
                    console.log(data);
                    // Очищение формы
                    this.formReset();
                    // Загружаем список филиалов
                    this.branchGet();
                },
                // Отрицательный ответ
                error => {
                    console.log( 'Ошибка при обращении к сервису: ' + error )
                }
            );
    }

    // Загрузка списка филиалов
    branchGet(){

        this.branchesService.get()
            .subscribe(
                (branches: Branch[]) => {
                    this.branches = branches;
                    return this.branches
                }
            );
    }

    ngOnInit() {

        // Загружаем список филиалов
        this.branchGet();

        // Инициализируем форму для заполнения
        this.branchForm = new FormGroup({
            name:               new FormControl( null, [ ] ),
            address:            new FormControl( null, [ ] ),
            cartridge_store:    new FormControl( null, [ ] )
        });
    }

}
