import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataModel } from '../../models/data.model';
import { PointModel } from '../../models/point.model';
import { PointMapper } from '../mappers/point-mapper';

@Injectable({
    providedIn: 'root',
})
export class CountriesService {
    #apiUrl = 'https://api.covid19api.com/';

    constructor(private http: HttpClient) { }

    // Get List Of Cases Per Country Per Province By Case Type
    fetchCountryRoute(country: string): Observable<DataModel[]> {
        return this.http.get<DataModel[]>(`${this.#apiUrl}country/${country}`);
    }

    fetchCountryRouteMapToPoint(country: string): Observable<PointModel[]> {
        return this.http.get<DataModel[]>(`${this.#apiUrl}country/${country}`)
            .pipe(
                map((data: DataModel[]) => {
                    const result: PointModel[] = [];
                    data.forEach(d => {
                        result.push(PointMapper.fromData(d));
                    });
                    return result;
                })
            );
    }
}
