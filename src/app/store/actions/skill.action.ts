import { createAction } from '@ngrx/store';
import { Skill} from '../model/skill';

export const addSkill = createAction('Add Skills', (skill: Skill) => ({
  skill,
}));

