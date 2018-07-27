import { PirateCrew } from "./pirate-crew";

export interface Pirate {
    pirateID: number;
    name: string;
    nickName: string;
    pirateCrewID: number;
    position: string;
    bounty: number;

    pirateCrew?: PirateCrew;
}
