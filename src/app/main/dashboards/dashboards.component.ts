import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { DataModel } from 'src/app/shared/models/data.model';
import { PointModel } from 'src/app/shared/models/point.model';
import { PointMapper } from 'src/app/shared/services/mappers/point-mapper';
import { map } from 'rxjs/operators';
import * as Chart from 'chart.js';
import { CountriesService } from 'src/app/shared/services/countries/countries.service';
import { CountryModel } from 'src/app/shared/models/country.model';

@Component({
    selector: 'app-dashboards',
    templateUrl: './dashboards.component.html',
    styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
    chart: any;
    data: PointModel[] = [];
    x: any[] = [];
    y: number[] = [];
    y2: number[] = [];
    countries: CountryModel[] = [];
    selectedCountry: CountryModel;

    constructor(
        private settingsService: SettingsService,
        private countriesService: CountriesService
    ) { }

    ngOnInit(): void {
        this.fetchCountries();
        setTimeout(() => this.initialLoad(), 2000);
    }
    // nie wiem jak zrobić żeby selectedCountry się inicjalizowało dopiero po pobraniu listy krajów
    private initialLoad() {
        this.selectedCountry = this.countries.find(country => country.Slug === 'poland');
        console.log(this.selectedCountry);

        this.loadData(this.selectedCountry);
    }
    private fetchCountries() {
        this.settingsService.fetchCountries().subscribe(
            (result: CountryModel[]) => {
                this.countries = result;
                console.log(this.countries);
            },
            (err) => this.doNothing(err)
        );
    }
    public loadData(country: CountryModel) {
        console.log(country);
        this.countriesService.fetchCountryRouteMapToPoint(country.Slug).subscribe(
            (result: PointModel[]) => {
                this.data = result; console.log(result);
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
