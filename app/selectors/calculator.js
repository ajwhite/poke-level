import {createSelector, createStructuredSelector} from 'reselect';
import {currentXPSelector, targetXPSelector} from './experiencePoints';
import {pidgiesSelector, totalsSelector, grossEvolveXPSelector} from './pokemon';

export default createStructuredSelector({
  currentXP: currentXPSelector,
  targetXP: targetXPSelector,
  pidgies: pidgiesSelector,
  totals: totalsSelector,
  grossEvolveXP: grossEvolveXPSelector
});
