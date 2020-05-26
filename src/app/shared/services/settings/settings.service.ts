import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from '../../models/country.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    #apiUrl = 'https://api.covid19api.com/';

    constructor(private http: HttpClient) { }

    // Get List Of Countries
    fetchCountries(): Observable<CountryModel[]> {
        return this.http.get<CountryModel[]>(this.#apiUrl + `countries`)
            .pipe(
                map((data: CountryModel[]) => {
                    data.sort((a, b) => (a.Country > b.Country) ? 1 : -1);
                    return data;
                })
            );
    }

}
