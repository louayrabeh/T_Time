import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatTable, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AjoutertacheComponent } from '../ajoutertache/ajoutertache.component';
import { ModifiertacheComponent } from '../modifiertache/modifiertache.component';
import { getTasksByEmployee } from 'src/api/api';
export interface TasksElement {
  tache: string;
  id: number;
  projet:string;
  sous_categ:string;
  date_debut: string;
  date_fin: string;
  statut: string;
}
await getTasksByEmployee('users','5ec88800393039333818d1df').then(data=>console.log(data))
var ELEMENT_DATA: TasksElement[] = [
 /* { id: 1, projet:'test', sous_categ:'backend', tache: 'Hydrogen', date_debut: '2020,04,14', date_fin: 'H', statut: 'réalisée' },
  { id: 2, projet:'test1', sous_categ:'backend', tache: 'Helium', date_debut: '2020,04,15', date_fin: 'He', statut: 'non-réalisée' },
  { id: 3, projet:'test', sous_categ:'frontend', tache: 'Lithium', date_debut: '2020,04,15', date_fin: 'Li', statut: 'Neon' },
  { id: 4, projet:'test3', sous_categ:'frontend', tache: 'Beryllium', date_debut: '2020,04,12', date_fin: 'Be', statut: 'Neon' },
  { id: 5, projet:'test', sous_categ:'frontend', tache: 'Carbon', date_debut: '2020,04,15', date_fin: 'B', statut: 'Neon' },
  { id: 5, projet:'test4', sous_categ:'frontend', tache: 'Carbon', date_debut: '2020,04,15', date_fin: 'C', statut: 'Neon' },
  { id: 7, projet:'test2', sous_categ:'frontend', tache: 'Carbon', date_debut: '2020,04,15', date_fin: 'N', statut: 'Neon' },
  { id: 8, projet:'test', sous_categ:'backend', tache: 'Oxygen', date_debut: '2020,04,09', date_fin: 'O', statut: 'Neon' },
  { id: 9, projet:'test0', sous_categ:'backend', tache: 'Fluorine', date_debut: '2020,04,15', date_fin: 'F', statut: 'Neon' },
  { id: 10, projet:'test', sous_categ:'frontend', tache: 'Neon', date_debut: '2020,05,15', date_fin: 'Ne', statut: 'Neon' },*/
];
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  /*
  var date1 = new Date("2020/05/18");
var date2 = new Date("2021/05/18");
var oneDay = 24 * 60 * 60 * 1000; 
var diffDays = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24));
                alert(diffDays);
                */
            
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  returndate() {
    var d: Date = new Date()
    const day = d.getDate();
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    return day + "/" + month + "/" + year + "****" + d;
  }

  displayedColumns: string[] = ['projet', 'sous_categ', 'tache', 'date_debut', 'date_fin', 'statut', 'modifier', 'supprimer'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  logData1(row) {
    console.log(row.id);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  statut(row) {
    console.log(this.returndate());
  }
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(AjoutertacheComponent, {
      width: '500px',
      data: { title: 'Ajouter tâche' }
    });
    
  }
  openDialog_edit(row) {
    console.log("lou" + row.id + "lou")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { id: row.id, title:'Modifier tâche' };
    this.dialog.open(ModifiertacheComponent, dialogConfig);
    
  }
}