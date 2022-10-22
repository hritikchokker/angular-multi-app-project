import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first-app',
    loadChildren: () => import('./first-app-wrapper/first-app-wrapper.module').then(m => m.FirstAppWrapperModule)
  },
  {
    path: 'second-app',
    loadChildren: () => import('./second-app-wrapper/second-app-wrapper.module').then(m => m.SecondAppWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
