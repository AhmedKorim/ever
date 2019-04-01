import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from 'app/@theme';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SetupMerchantsComponent } from './merchants.component';
import { NbStepperModule } from '@nebular/theme';
import { SetupMerchantsComponentsModule } from './components/components.module';
import { MerchantsSetupInstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
	{
		path: '',
		component: SetupMerchantsComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		ThemeModule,
		RouterModule.forChild(routes),
		TranslateModule.forChild(),
		NbStepperModule,
		SetupMerchantsComponentsModule
	],
	declarations: [SetupMerchantsComponent, MerchantsSetupInstructionsComponent]
})
export class SetupMerchantsModule {}