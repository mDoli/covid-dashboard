import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from './node_modules/src/app/shared/services/settings/settings.service';
import { DataModel } from './node_modules/src/app/shared/models/data.model';
import { PointModel } from './node_modules/src/app/shared/models/point.model';
import { PointMapper } from './node_modules/src/app/shared/services/mappers/point-mapper';
import { map } from 'rxjs/operators';
import * as Chart from 'chart.js';
import { CountriesService } from './node_modules/src/app/shared/services/countries/countries.service';
import { CountryModel } from './node_modules/src/app/shared/models/country.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    chart: any;
    data: PointModel[] = [];
    x: any[] = [];
    y: number[] = [];
    y2: number[] = [];
    countries: CountryModel[] = [];
    selectedCountry: CountryModel = { Slug: 'poland', Country: 'Poland' };

    constructor(
        private settingsService: SettingsService,
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        // this.selectedCountry = this.countries.find(country => country.Slug === 'poland'); 
        // może zrobimy wykrywanie lokalizacji i na podstawie tego ustawiania kraju?

        this.settingsService.fetchCountries()
            .subscribe(
                (result: CountryModel[]) => {
                    this.countries = result;
                    console.log(this.countries);
                    if (this.selectedCountry != null) {
                        this.selectedCountry = this.countries.find(country => country.Slug === this.selectedCountry.Slug)
                    }

                },
                (err) => this.doNothing(err)
            )
            .add(
                this.loadChartData(this.selectedCountry)
            );
    }


    public loadChartData(country: CountryModel) {
        console.log(country);
        this.countriesService.fetchCountryRouteMapToPoint(country.Slug)
            .subscribe(
                (result: PointModel[]) => {
                    this.data = result; console.log(result);
                    this.x = [];
                    this.y = [];
                    this.y2 = [];
                    result.forEach(item => {
                        this.x.push(item.x); // tutaj jakiś inny sposób trzeba wymyśleć
                        this.y.push(item.y);
                        this.y2.push(item.y2);
                    });
                },
                (err) => this.doNothing(err))
            .add(() => this.buildChart());

        // this.countriesService.fetchCountryRoute('poland')
        //     .pipe(map(result => result.map(item => PointMapper.fromData(item))))
        //     .subscribe(
        //         (result: PointModel[]) => {  console.log(result); },
        //         (err) => this.doNothing(err));
    }

    private doNothing(err) {
        console.log(err);
    }

    private buildChart() {

        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: this.x, // dates
                datasets: [
                    {
                        data: this.y, // confirmed
                        borderColor: '#00AEFF',
                        fill: false
                    },
                    {
                        data: this.y2, // deaths
                        borderColor: '#20EE0F',
                        fill: false
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }
        });
    }
}
