import { createReducer, on } from '@ngrx/store';
import * as SkillAction from '../actions/skill.action';
import { Skill } from '../model/skill';

export const skillFeatureKey = 'skill';

export interface skillState {
  skills: Skill[];
}

export const initialState: skillState = {
  skills: [],
};

console.log(initialState);
export const reducer = createReducer(
  initialState,
  on(SkillAction.addSkill, (state: skillState, { skill }) => ({
    ...state,
    skills: [...state.skills, skill],
  })),
  
);
