import { DataModel } from '../../models/data.model';
import { PointModel } from '../../models/point.model';

export class PointMapper {
    static fromData(base: DataModel): PointModel {
        const point: PointModel = {
            x: base?.Date,
            y: base?.Confirmed,
            y2: base?.Deaths
        };

        return point;
    }
}
