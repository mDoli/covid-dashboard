import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

// import { TranslateModule } from '@ngx-translate/core';
// import { VirtualScrollerModule } from 'ngx-virtual-scroller';
// import { MatKeyboardModule } from './components/keyboard/keyboard.module';
// import { NgLetModule } from './directives/ng-let';


export const materialModules = [
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    ScrollingModule,
    //   VirtualScrollerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    //   MatKeyboardModule
];

// export const pipesModules = [
//   NgLetModule
// ];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        // TranslateModule,
        ...materialModules,
        // ...pipesModules
    ]
})
export class SharedModule { }
