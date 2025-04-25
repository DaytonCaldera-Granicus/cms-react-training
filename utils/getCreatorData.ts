
import { Creator } from "@/types/Creators";

const getCreatorFirstName = (creator: Creator) => {
    return creator.role == 'writer' || creator.role == 'editor' ? creator.name.split(' ')[0] : null;
}

export function getCreators(creators: Creator[]): string {
    const creatorsNames = creators.map((creator, index) => {
        return getCreatorFirstName(creator);
    }).filter(creator => creator !== null && creator !== undefined && creator !== '');
    return creatorsNames.join(', ');
}