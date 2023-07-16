import { skillFeatureKey, skillState } from '../reducers/skill.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectSkillState =
  createFeatureSelector<skillState>(skillFeatureKey);

export const selectSkills = createSelector(
    selectSkillState,
  (state: skillState) => state.skills
);

