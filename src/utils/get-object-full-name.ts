import {uncapitalizeFirstLetter} from './uncapitalize-first-letter';
import {LDObject} from './fetch-object';

export function getObjectFullName(object: LDObject): string {
  return `${object.name.toUpperCase()}, ${uncapitalizeFirstLetter(object.description)}`;
}
